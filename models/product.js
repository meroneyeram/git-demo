const mongoose = require("mongoose");

const productSchema = new mongoose.Schema(
  {
    prodId: { type: Number, required: [true, "please provide sku"] },
    name: { type: String },
    description: { type: String },
    active: { type: Boolean },
    unitPrice: { type: Number },
    unitsInStock: { type: Number },
    // productCategory: mongoose.Schema({
    //   categoryName: { type: String },
    // }),
  },
  { timestamps: true }
);

const Product = mongoose.model("product", productSchema);

module.exports = Product;
