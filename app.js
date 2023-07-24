const express = require("express");
const app = express();

const productRouter = require("./routes/product");

app.use("", productRouter);

app.listen(8000, () => console.log("listening on port 8000"));
