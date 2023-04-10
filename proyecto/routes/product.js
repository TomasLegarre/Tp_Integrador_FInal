var express = require('express');
var router = express.Router();
const controlador_product = require('../controllers/controlador_product');


router.get('/add', controlador_product.product_add);
router.get('/detail/:id', controlador_product.product_detail);



module.exports = router;
