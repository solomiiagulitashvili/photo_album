const MongoClient = require("mongodb").MongoClient;
const express = require("express");

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

  app.listen(3000, function() {
    console.log("i am listening on port 3000");
  });
});
