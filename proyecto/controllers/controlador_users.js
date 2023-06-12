const db = require('../database/models')
const usuarios = db.Usuario;
//let op = db.Sequalize.Op;
const bcrypt = require('bcryptjs') // biblioteca npm. Funcion = hashear 
const session = require('express-session');

const usuariosController = {

    profile_edit: function (req, res) {
        res.render('profile-edit');
    },
    profile: function (req, res) {

        let id = req.params.id

        usuarios.findByPk(id, {
            include: [

                { 
                    association: 'productos', 
                    include: [
                        { association: 'comentario', include: [{ association: 'usuario' }]}
                    ]
                },

                {
                    association: 'productos',
                    include: [
                        { association: 'comentario', include: [{ association: 'usuario' }] }
                    ]
                },


            ],
            order: [
                ['update_at', 'DESC']
            ],

        })

            .then(result => {
                // res.send(result)
                res.render('profile', { datos_usuario: result });
            })
            .catch(error => {
                console.log(error);
                res.render('error', { error: 'Error al obtener usuarios' });
            });

    },
    register: function (req, res) {
        if (req.session.usuarios != undefined) {
            res.redirect('/')
        } else {
            res.render('register');
        }
    },
    proceso_registro: function (req, res) {
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
            password = bcrypt.hashSync(req.body.password, 10) // el bcrypt es el codigo para poder hashear, arriba esta requerida la bibloteca //
        } else {
            res.send("Contraseña inválida")
        }

        if (req.body.email !== '') {
            email = req.body.email
        } else {
            res.send("El email no puede estar vacío")
        }

        if (req.body.dni.length <= 7 || req.body.dni.length <= 8) {
            DNI = req.body.dni
        } else {
            res.send("El DNI no es válido")
        }

        usuarios.findOne({
            where: { 'email': email }
        })
            .then(result => {
                if (result) {
                    res.send("El email ya está en uso")
                } else {
                    // Podemos registrar al usuario
                    usuarios.create({
                        nombre: username,
                        email: email,
                        contrasenia: password,
                        foto_perfil: 'default-image.png',
                        fecha: fecha_nacimiento,
                        dni: parseInt(DNI)
                    })
                        .then(result => {
                            return res.redirect('/users/login')
                        })
                        .catch(err => {
                            res.send(err)
                        })
                }
            })
            .catch(err => { res.send(err) })


    },
    login: function (req, res) {
        if (req.session.usuarios != undefined) {
            return res.redirect('/');
        } else {
            return res.render('login'); //la var usuarios: almacena el usuario en sesión.
        }
    },
    loginPost: function (req, res) {
        let username = req.body.username;
        let pass = req.body.password;

        let filtrado = {
            where: [{ nombre: username }]
        };
        usuarios.findOne(filtrado)
            .then((result) => {

                if (result != null) {
                    let claveCorrecta = bcrypt.compareSync(pass, result.contrasenia)
                    if (claveCorrecta) {


                        req.session.usuarios = {
                            id: result.id,
                            nombre: result.nombre,
                            email: result.email,
                            foto_perfil: result.foto_perfil,
                        }

                        // /* poner un usuario en session */
                        // req.session.usuarios = result.dataValues;// saque la S --> me dijo miguel que sea usuario NO usuarios 
                        // res.locals.usuarios = result.dataValues;


                        req.session.usuarios = {
                            id: result.id,
                            nombre: result.nombre,
                            email: result.email,
                            foto_perfil: result.foto_perfil,
                        }
                        /*  tildo recordarme => creamos la cookie */
                        if (req.body.rememberme != undefined) {
                            res.cookie('usuario', result.id, { maxAge: 1000 * 60 * 15 })
                        }
                        return res.redirect("/");
                    } else {
                        return res.send("Existe el usuario  pero la password es incorrecta");
                    }
                } else {
                    return res.send("El usuario es invalido")
                }

            }).catch((err) => {
                console.log(err);
            });

    },
    logout: (req, res) => {
        req.session.destroy();// Eliminar la sesión del usuario y redireccionar a la página de inicio de sesión
        res.clearCookie('usuario');
        res.redirect('/');
    }

};

module.exports = usuariosController;