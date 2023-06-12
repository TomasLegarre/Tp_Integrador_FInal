<<<<<<< HEAD
const db = require ('../database/models');
=======
const db = require('../database/models');
>>>>>>> f70d358d3f9e10e713a311ec30afae8e5a09202a
const op = db.Sequelize.Op;
const usuarios = db.Usuario; //alias
const comentarios = db.Comentario; //alias
const productos = db.Producto;

const controlador_product = {

<<<<<<< HEAD
 
    product_add: function(req, res) {
=======

    product_add: function (req, res) {
>>>>>>> f70d358d3f9e10e713a311ec30afae8e5a09202a
        if (req.session.usuarios == undefined) {
            res.redirect('/users/login');
        } else {
            res.render('product_add');
        }
<<<<<<< HEAD
    },
    store: function(req, res) {
        let form = req.body;

        productos.create({
            nombre: form.nombre,
            descripcion: form.descripcion,
            imagen: '/images/products/default-image.png',
            id_usuario: req.session.usuarios.id
        })
        .then(function(respuesta) {
            res.redirect('/products/detail/' + respuesta.id);
        })
        .catch(function(error) {
            res.send(error);
        })
=======
>>>>>>> f70d358d3f9e10e713a311ec30afae8e5a09202a
    },
    store: function (req, res) {
        let form = req.body;
        let imagen = req.file;

        productos.create({
            nombre: form.nombre,
            descripcion: form.descripcion,
            imagen: imagen.filename,
            id_usuario: req.session.usuarios.id
        })
            .then(function (respuesta) {
                res.redirect('/products/detail/' + respuesta.id);
            })
            .catch(function (error) {
                res.send(error);
            })
    },
    product_detail: function (req, res) {
        let id = req.params.id;
<<<<<<< HEAD
        
        productos.findByPk(id, {
            include: [
                {association: "usuario"},
                {association: "comentario", include: [{association: "usuario"}]}
            ]
        })
        .then(function(telefono){
            let lista_comentarios = telefono.comentario;
            res.render('product_detail', {telefono: telefono, lista_comentarios: lista_comentarios});
        })
        .catch(function(error){
            res.send(error);
        })
    },
    search_results: function(req, res) {
        let busqueda = req.query.search;

        productos.findAll({
            where: [
                {
                    nombre: {[op.like]: '%' + busqueda + '%'},
=======

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
>>>>>>> f70d358d3f9e10e713a311ec30afae8e5a09202a
                },
            ],
            order: [
                ['update_at', 'DESC']
            ],
            include: [{ association: "usuario" }, { association: "comentario" }]
        })
<<<<<<< HEAD
        .then(function(telefonos){
=======
        .then(function (telefonos) {
>>>>>>> f70d358d3f9e10e713a311ec30afae8e5a09202a
            if (telefonos.length == 0) {
                productos.findAll({
                    where: [
                        {
<<<<<<< HEAD
                            descripcion: {[op.like]: '%' + busqueda + '%'}
=======
                            descripcion: { [op.like]: '%' + busqueda + '%' }
>>>>>>> f70d358d3f9e10e713a311ec30afae8e5a09202a
                        },
                    ],
                    order: [
                        ['update_at', 'DESC']
                    ],
                    include: [{ association: "usuario" }, { association: "comentario" }]
                })
<<<<<<< HEAD
                .then(function(telefonos){
                    if (telefonos.length == 0) {
                        res.render('search-results', {telefonos: [], resultado: busqueda});
                    } else {
                        res.render('search-results', {telefonos: telefonos, resultado: busqueda});
                    }
                })
            } else {
                res.render('search-results', {telefonos: telefonos, resultado: busqueda});
            }
        })
        .catch(function(error){
            res.send(error)
        })
=======
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
>>>>>>> f70d358d3f9e10e713a311ec30afae8e5a09202a
    }
    
}
module.exports = controlador_product;
