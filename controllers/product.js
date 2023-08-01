const Proudct = require("../models/product.js");

exports.addProduct = async (req, res) => {
  try {
    const product = await Proudct.create(req.body);
    res.status(201).json({ proudct: product });
  } catch (error) {
    res.send(error);
  }
};

exports.getAllProducts = async (req, res) => {
  try {
    const products = await Proudct.find();
    res.status(200).json({ proudcts: products });
  } catch (error) {
    res.send(error);
  }
};

exports.getProduct = async (req, res) => {
  const id = req.param.id;
  try {
    const product = await Proudct.find({ prodId: id });
    if (!product) {
      return res.status(404).send("No product found by the given prodId");
    }
    res.status(200).send(product);
  } catch (error) {
    res.send(error);
  }
};

exports.updateProduct = async (req, res) => {
  const id = req.param.id;
  try {
    const product = await Proudct.findOneAndUpdate({ prodId: id });
    if (!product) {
      return res.status(404).send("No product found by the given prodId");
    }
    res.status(200).send(product);
  } catch (error) {
    res.send(error);
  }
};

exports.deleteProduct = async (req, res) => {
  const id = req.param.id;
  try {
    const product = await Proudct.findOneAndDelete({ prodId: id });
    if (!product) {
      return res.status(404).send("No product found by the given prodId");
    }
    res.status(200).send(product);
  } catch (error) {
    res.send(error);
  }
};
