const express = require('express');
const controlador_index = require('../controllers/controlador_index');
const router = express.Router();
const controlador_users = require('../controllers/controlador_users');

//suf
router.get('/profile-edit', controlador_users.profile_edit);
router.get('/register', controlador_users.register); // el subfijo no lo repetimos aca, solo en el app. Aca solo el router
//router.get('/login', controlador_users.login);
router.get('/login', controlador_users.login);

router.post('/register', controlador_users.proceso_registro);
router.post('/users/login',controlador_users.login);
router.post('/register', controlador_users.proceso_registro);
//router.post('/login', controlador_users.loginPost);
router.post('/login', controlador_users.loginPost);
router.post('/logout', controlador_users.logout);

router.get('/profile/:id', controlador_users.profile);




module.exports = router;

