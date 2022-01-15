const mongodb = require("mongodb");
const MongoClient = mongodb.MongoClient;
const mongoConnect = (callback) => {
  MongoClient.connect(
    "mongodb+srv://admin:ph8HjaDfuRZBuLh@cluster0.aay6z.mongodb.net/Cluster0?retryWrites=true&w=majority",
    { useNewUrlParser: true, useUnifiedTopology: true }
  )
    .then((result) => {
      console.log("Connected!");
      callback(result);
    })
    .catch((err) => console.log(err));
};
module.exports = mongoConnect;
