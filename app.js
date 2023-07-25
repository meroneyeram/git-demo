const mongoose = require("mongoose");
const express = require("express");
const app = express();
const productRouter = require("./routes/product");

// middle ware
app.use(express.json());

//routes
app.use("/api/v1/product", productRouter);

//error handler
app.use((err, req, res, next) => {
  res.send(err.message);
});

try {
  mongoose.connect("mongodb://127.0.0.1:27017/mystoredb");
  console.log("connected to db");
} catch (err) {
  console.log("db error");
}

app.listen(8000, () => console.log("listening on port 8000"));
