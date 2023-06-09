var express = require('express');
var router = express.Router();
const controlador_product = require('../controllers/controlador_product');


router.get('/add', controlador_product.product_add);
router.get('/search-results', controlador_product.search_results);
router.get('/detail/:id', controlador_product.product_detail);
router.get('/edit/:id', controlador_product.product_edit);


//router.post('/edit', controlador_product.EditProduct);
router.post('/add', controlador_product.store);
router.post('/detail/:id', controlador_product.product_detail);
router.post('/delete/:id', controlador_product.product_delete);
router.post('/edit/:id', controlador_product.EditProduct);
router.post('/comentar/id/:id' , controlador_product.comentar);


module.exports = router;

//localhost:3000/products/add
//localhost:3000/products/detail/:iphone
// dominio        pre      suf    param