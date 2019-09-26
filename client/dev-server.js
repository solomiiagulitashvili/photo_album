const Bundler = require("parcel-bundler");
const express = require("express");
const proxy = require("http-proxy-middleware");
const path = require("path");

const app = express();

app.use(
  "/api",
  proxy({
    target: "http://localhost:3000/"
  })
);

const bundler = new Bundler(path.resolve(__dirname, "index.html"));
app.use(bundler.middleware());

app.listen(Number(process.env.PORT || 1234));
