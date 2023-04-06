var express = require('express');
var router = express.Router();
const controlador = require('../controllers/controlador');

/* GET home page. */
router.get('/', controlador.index);
router.get('/login', controlador.login);
router.get('/product_add', controlador.product_add);
router.get('/product_detail/:id', controlador.product_detail);
router.get('/profile_edit', controlador.profile_edit);
router.get('/profile/:id', controlador.profile);
router.get('/register', controlador.register);
router.get('/search_results/:busqueda', controlador.search_results);

module.exports = router;
