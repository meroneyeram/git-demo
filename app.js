require("dotenv").config();
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
  mongoose.connect(process.env.MONGO_URI + "/" + process.env.DB_NAME);
  console.log("connected to db");
} catch (err) {
  console.log("db error");
}

const port = process.env.PORT || 8000;
app.listen(port, () => console.log("listening on port 8000"));
