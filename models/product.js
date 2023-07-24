const mongoose = require("mongoose");

const productSchema = mongoose.Schema(
  {
    sku: { type: String },
    name: { type: String },
    description: { type: String },
    active: { type: Boolean },
    unitPrice: { type: Number },
    unitsInStock: { type: Number },
    productCategory: mongoose.Schema({
      categoryName: { type: String },
    }),
  },
  { timestamps: true }
);

const Product = mongoose.model("product", productSchema);

module.exports = Product;
