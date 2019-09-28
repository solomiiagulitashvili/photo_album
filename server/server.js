const MongoClient = require("mongodb").MongoClient;
const express = require("express");
const multer = require("multer");
const path = require("path");
const upload = multer();

const url = "mongodb://localhost:27017";
const dbName = "photo_album";
MongoClient.connect(url, function(err, client) {
  const dataBase = client.db(dbName);
  const photosCollection = dataBase.collection("photos");

  const app = express();

  app.get("/api/photos", function(req, res) {
    photosCollection.find({}).toArray(function(err, PhotoArr) {
      res.send(PhotoArr);
    });
  });

  app.post("/api/photos", upload.single("photo"), function(req, res) {
    console.log(req.file);
    path.extname(req.file.originalname);
    var extension = path.extname(req.file.originalname);
    console.log(extension);
    if (extension !== ".jpg" && extension !== ".jpeg") {
      res.status(406).send("We accept only jpg files");
      return;
    }
    const encodedImage = req.file.buffer.toString("base64");
    photosCollection.insertOne(
      { src: "data:image/jpeg;base64," + encodedImage, likes: 0 },
      function(err, result) {
        res.send("photo received");
      }
    );
  });

  app.listen(3000, function() {
    console.log("i am listening on port 3000");
  });
});
