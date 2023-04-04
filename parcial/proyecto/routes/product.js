let express = require ("express");
let router = express.Router();
let productController = require("../controllers/productController")

router.get('/product', productController.todos);
  



module.exports = router;


