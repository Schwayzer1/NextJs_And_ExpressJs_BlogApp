const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const cors = require("cors");
const postRoutes = require("./routes/posts");

const app = express(); // express ile bir express server oluşturdu

app.use(bodyParser.json({ limit: "30mb", extended: true })); // JSON formatında gelen veriyi kabul et belirtilen limit ile
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors()); // HTTP requestlerde sorun yaşamamak için kullanılan bir paket

app.get("/", (req, res) => {
  res.json({
    author: "Furkan Onay",
    message: "Hi SelfProf :)",
  });
});

app.use("/posts", postRoutes);

const PORT = 5000; // backendin çalışacağı port
const CONNECTION_URL =
  "mongodb+srv://Schwayzer:Furkan123-@cluster1.ylrwfw6.mongodb.net/?retryWrites=true&w=majority";

mongoose
  .connect(CONNECTION_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    app.listen(PORT, () => {
      console.log("Server is running on" + PORT);
    });
  })
  .catch((error) => {
    console.log(error.message);
  });
