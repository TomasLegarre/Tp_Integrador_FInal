var express = require('express');
var router = express.Router();
const controlador_product = require('../controllers/controlador_product');

const multer = require('multer');
const path = require('path');

const storage = multer.diskStorage({
    destination: function(req, file, cb) { // cb = callback
        cb(null, path.join(__dirname, '../../public/images/products'));
    },
    filename: function(req, file, cb) {
        cb(null, 'product-' + Date.now() + '.png');
    }
})

const upload = multer({storage: storage});



router.get('/add', controlador_product.product_add);
router.get('/search-results', controlador_product.search_results);

router.post('/add', upload.single('imagen'), controlador_product.store);

router.get('/detail/:id', controlador_product.product_detail);



module.exports = router;

//localhost:3000/products/add
//localhost:3000/products/detail/:iphone
// dominio        pre      suf    param