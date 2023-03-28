const express = require("express");
const mongoose = require("mongoose");
const router = require("./routes/book-routes");
const cors = require("cors");
const app = express();

// Middlewares
app.use(express.json());
app.use(cors());
app.get("/", (req,res) => {
res.setHeader("Access-Control-Allow-Credentials","true");
res.send("hello");
})

app.use("/books", router); // localhost:5000/books
 

mongoose
  .connect(
    "mongodb+srv://admin:admin@cluster0.uro3q2f.mongodb.net/bookstore?retryWrites=true&w=majority"
  )
  .then(() => console.log("Connected To Database"))
  .then(() => {
  app.listen(5000);
  })
  .catch((err) => console.log(err));
