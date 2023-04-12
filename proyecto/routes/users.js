var express = require('express');
var router = express.Router();
const controlador_users = require('../controllers/controlador_users');


router.get('/profile_edit', controlador_users.profile_edit);
router.get('/profile', controlador_users.profile);
router.get('/register', controlador_users.register); // el subfijo no lo repetimos aca, solo en el app. Aca solo el router
router.get('/login', controlador_users.login);

module.exports = router;

