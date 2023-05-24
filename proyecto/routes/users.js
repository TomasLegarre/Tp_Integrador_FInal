const express = require('express');
const router = express.Router();
const controlador_users = require('../controllers/controlador_users');

//suf
router.get('/profile-edit', controlador_users.profile_edit);
router.get('/profile', controlador_users.profile);
router.get('/register', controlador_users.register); // el subfijo no lo repetimos aca, solo en el app. Aca solo el router
router.get('/login', controlador_users.login);

// GET users listing: 
//router.get('/all', controlador_users.findAll); rompe el codigo

// find by PK -- (busco registros a traves de una Pk):
//router.get('/id/:id', controlador_users.Show)


module.exports = router;

