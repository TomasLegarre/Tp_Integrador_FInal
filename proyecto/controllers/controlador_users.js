const db = require('../database/models')
const usuarios = db.Usuario; 
//let op = db.Sequalize.Op;
const bcrypt = require('bcryptjs') // biblioteca npm. Funcion = hashear 
const session = require('express-session');

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


    },
    login1: function(req, res) {
        if (req.session.usuarios != undefined) {
            return res.redirect('/');
        } else {
            return res.render('login');
        }
    },
    loginPost: function(req, res) {
        let username = req.body.username;
        let pass = req.body.password;

        let filtrado = {
            where: [{nombre: username}]
        };
        usuarios.findOne(filtrado)
        .then((result) => {

            if (result != null) {
                let claveCorrecta = bcrypt.compareSync(pass, result.contrasenia)
                if (claveCorrecta) {
                    /* poner un usuario en session */
                    req.session.usuarios = result.dataValues;

                    /*  tildo recordarme => creamos la cookie */
                    if (req.body.rememberme != undefined) {
                        res.cookie('usuario', result.id, {maxAge: 1000 * 60 * 15})
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
       
    }
   

/*proceso_login: function(req, res) {
  const username = req.body.username;
  const password = req.body.password;
  
  if (username !== '' && password !== '') {
    // Buscar el usuario en la base
    usuarios.findOne({
      where: { username: username }
    })
    .then(user => {
      if (user) {
        // Comparar la contraseña ingresada con la almacenada en la base de datos
        if (bcrypt.compareSync(password, user.password)) {
          // Inicio de sesión exitoso
          req.session.username = username; // Establece la sesión del usuario y la recuerda
          res.redirect('/');
        } else {
          res.send('Contraseña inválida');
        }
      } else {
        res.send('Nombre de usuario no encontrado');
      }
    })
    .catch(err => {
      res.send(err);
    });
  } else {
    res.send('Nombre de usuario o contraseña inválidos');
  }
} */
     
};

module.exports = usuariosController;