const router = require("express").Router();
const productController = require("../controllers/product");

router.post("", productController.addProduct);

router.get("", productController.getAllProducts);

router.get("/:id", productController.getProduct);

router.put("/:id", productController.updateProduct);

router.delete("/:id", productController.deleteProduct);

module.exports = router;
