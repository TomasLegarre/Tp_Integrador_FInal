const db = require('../database/models')
const usuarios = db.Usuario; //Alias del modelo
//let op = db.Sequalize.Op;

const usuariosController = {
     
    login: function(req, res) {
        res.render('login');
    },
    profile_edit: function(req, res) {
        res.render('profile-edit');
    },
    profile: function(req, res) {
        
        usuarios.findAll()
            
            .then(result => {
                 res.render('profile', { lista_telefonos: result , lista_usuarios: result});
             })
            .catch(error => {
            console.log(error);
             res.render('error', { error: 'Error al obtener usuarios' });
            });

    },
    register: function(req, res) {
        res.render('register');
    },
};

module.exports = usuariosController;