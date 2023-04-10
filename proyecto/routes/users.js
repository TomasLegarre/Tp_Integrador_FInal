var express = require('express');
var router = express.Router();
const controlador = require('../controllers/controlador');


router.get('/profile_edit', controlador.profile_edit);
router.get('/profile/:id', controlador.profile);
router.get('/register', controlador.register);


module.exports = router;