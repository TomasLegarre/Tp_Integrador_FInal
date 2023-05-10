const lista_telefonos = require('../db/models');
const usuarios = db.Usuario; //Alias del modelo

//const lista_telefonos = require('../db/telefonos'); se estaba usando este!!! 


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