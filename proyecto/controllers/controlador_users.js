const lista_telefonos = require('../db/telefonos');
const lista_usuarios = require('../db/usuarios');
const lista_comentarios = require('../db/comentarios');

const controlador_users = {
    
    login: function(req, res) {
        res.render('login');
    },
    profile_edit: function(req, res) {
        res.render('profile-edit');
    },
    profile: function(req, res) {
        res.render('profile', {lista_telefonos: lista_telefonos});
    },
    register: function(req, res) {
        res.render('register');
    },

}


module.exports = controlador_users;