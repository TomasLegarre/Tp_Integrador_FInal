const db = require('../database/models');
const op = db.Sequelize.Op;
const usuarios = db.Usuario; //alias
const comentarios = db.Comentario; //alias
const productos = db.Producto;

const controlador_product = {


    product_add: function (req, res) {
        if (req.session.usuario) {
            return res.render('product_add');
        } else {
            return res.redirect('/users/login');
        }
    },
    store: function (req, res) {
        let nombre = req.body.nombre;
        let descripcion = req.body.descripcion;
        let imagen = req.body.imagen;

        productos.create({
            nombre: nombre,
            descripcion: descripcion,
            imagen: imagen,
            usuario_id: req.session.usuario.id
        })
            .then(function (respuesta) {
                res.redirect('/products/detail/' + respuesta.id);
            })
            .catch(function (error) {
                res.send(error);
            })
    },
    product_detail: function (req, res) {
      //  return res.send(req.session.Usuario)
        // comentarios.findAll({
        //     order: [['update_at', 'DESC']],
       // }) // quiero que se vean de fomra descendente
      
      let id = req.params.id;

        productos.findByPk(id, {
            include: [
                { association: "usuario" },
                { association: "comentario", include: [{ association: "usuario" }] }
            ]
        })
            .then(function (telefono) {
                let lista_comentarios = telefono.comentario;
                res.render('product_detail', { telefono: telefono, lista_comentarios: lista_comentarios });
            })
            .catch(function (error) {
                res.send(error);
            })
    },
    search_results: function (req, res) {
        let busqueda = req.query.search;
    
        productos.findAll({
            where: [
                {
                    nombre: { [op.like]: '%' + busqueda + '%' },
                },
            ],
            order: [
                ['update_at', 'DESC']
            ],
            include: [{ association: "usuario" }, { association: "comentario" }]
        })
        .then(function (telefonos) {
            if (telefonos.length == 0) {
                productos.findAll({
                    where: [
                        {
                            descripcion: { [op.like]: '%' + busqueda + '%' }
                        },
                    ],
                    order: [
                        ['update_at', 'DESC']
                    ],
                    include: [{ association: "usuario" }, { association: "comentario" }]
                })
                .then(function (telefonos) {
                    if (telefonos.length == 0) {
                        res.render('search-results', { telefonos: [], resultado: busqueda });
                    } else {
                        res.render('search-results', { telefonos: telefonos, resultado: busqueda });
                    }
                })
            } else {
                res.render('search-results', { telefonos: telefonos, resultado: busqueda });
            }
        })
        .catch(function (error) {
            res.send(error);
        });
    },
    product_delete: function (req, res) {
        let id = req.params.id;
        let usuarioId = req.session.usuario.id;
    
        // Verificar si el producto pertenece al usuario logueado
        productos.findOne({
          where: {
            id: id,
            usuario_id: usuarioId
          }
        })
        .then(function (producto) {
          if (producto) {
            // El producto pertenece al usuario logueado, se puede eliminar
            productos.destroy({
              where: {
                id: id,
                usuario_id: usuarioId
              }
            })
            .then(function () {
              res.redirect('/'); 
            })
            .catch(function (error) {
              res.send(error);
            });
          } else {
            // El producto no pertenece al usuario logueado, mostrar mensaje de error
            res.send('El producto no pertenece al usuario logueado.');
          }
        })
        .catch(function (error) {
          res.send(error);
        });
      },
      product_edit: function (req, res) {


        if (req.session.usuario != undefined) {
          let idProducto = req.params.id; // Obtener el ID del producto de la URL
          productos.findByPk(idProducto, {
            include: [{ association: "usuario" }, { association: "comentario" }]
          })
            .then(function (telefono) {
              res.render('product_edit', { telefono: telefono });
            })
            .catch(function (error) {
              res.send(error);
            });
        } else {
          res.redirect('/users/login');
        }
    },
    EditProduct: function (req,res) {
        let idProducto = req.params.id;
        let nombre = req.body.nombre;
        let descripcion = req.body.descripcion;
        let imagen =  req.body.imagen;

        productos.update({
            nombre: nombre,
            descripcion: descripcion,
            imagen: imagen,
        },{
            where: {
                id: idProducto
            },
        })
            .then(function () {
                res.redirect('/products/detail/' + idProducto);
            })
            .catch(function (error) {
                res.send(error);
            })
        
    },
    
    comentar: function(req, res){
             let id = req.params.id
            //  comentarios.findAll({
            //     order: [['update_at', 'DESC']],
            //  }
            //  ) ORDEN
             
            
            if(req.session.usuario != undefined){ //si esxiste el usario en la sesion, que pueda comentar
                 nuevoComentario = { 
                    comentario: req.body.comentario,
                    producto_id: id,
                    usuario_id: req.session.usuario.id,   
                 }
                 db.Comentario.create(nuevoComentario)
                 .then(function(){
                     return res.redirect('/products/detail/' + id)
                 }
                 )} else {
                 return res.redirect('/users/login')
             }

    
        }

}
module.exports = controlador_product;