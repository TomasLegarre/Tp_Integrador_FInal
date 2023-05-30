const db = require('../database/models')
const usuarios = db.Usuario; 
//let op = db.Sequalize.Op;
const bcrypt = require('bcryptjs') // biblioteca npm. Funcion = hashear 

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
    proceso_registro: function(req, res) {
        let username
        let password
        let email
        let fecha_nacimiento = req.body.fecha_nacimiento
        let DNI

        if (req.body.username !== '') {
            username = req.body.username
        } else {
            res.send("Nombre de usario no válido")
        }

        if (req.body.password.length >= 3) {
            password = bcrypt.hashSync(req.body.password, 10)
        } else {
            res.send("Contraseña inválida")
        }

        if (req.body.email !== '') {
            email = req.body.email
        } else {
            res.send("El email no puede estar vacío")
        }

        if (7 <= req.body.dni.length <= 8) {
            DNI = req.body.dni
        } else {
            res.send("El DNI no es válido")
        }
        
        usuarios.findOne({
            where : {'email': email}
        })
        .then(result => {
            if (result) {
                res.send("El email ya está en uso")
            } else {
                // Podemos registrar al usuario
                usuarios.create({
                    nombre : username,
                    email : email,
                    contrasenia : password,
                    foto_perfil : 'default-image.png',
                    fecha : fecha_nacimiento,
                    dni : parseInt(DNI)
                })
                .then(result => {
                    return res.redirect('/users/login')
                })
                .catch(err => {
                    res.send(err)
                })
            }
        })
        .catch(err => {res.send(err)})


    }

};

module.exports = usuariosController;