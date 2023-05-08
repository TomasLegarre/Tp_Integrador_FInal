var express = require('express');
var router = express.Router();
const controlador_index = require('../controllers/controlador_index');

/* GET home page. ruta raiz de la pag */
//          creacion de sufijo
router.get('/', controlador_index.index);

router.get('/search-results', controlador_index.search_results);
//v     s      r                                 m

module.exports = router;

