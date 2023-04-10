var express = require('express');
var router = express.Router();
const controlador = require('../controllers/controlador');

/* GET home page. */
router.get('/', controlador.index);
router.get('/login', controlador.login);
router.get('/search_results/:busqueda', controlador.search_results);


module.exports = router;
