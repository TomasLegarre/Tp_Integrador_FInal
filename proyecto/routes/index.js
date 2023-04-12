var express = require('express');
var router = express.Router();
const controlador_index = require('../controllers/controlador_index');

/* GET home page. */
router.get('/', controlador_index.index);

router.get('/search-results', controlador_index.search_results);


module.exports = router;
