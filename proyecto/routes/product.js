var express = require('express');
var router = express.Router();
const controlador = require('../controllers/controlador');


router.get('/add', controlador.product_add);
router.get('/detail/:id', controlador.product_detail);


module.exports = router;
