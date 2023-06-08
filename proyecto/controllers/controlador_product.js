const db = require ('../database/models');
const op = db.Sequelize.Op;
const usuarios = db.Usuario; //alias
const comentarios = db.Comentario; //alias
const productos = db.Producto; 

const controlador_product = {

 
    product_add: function(req, res) {
        res.render('product_add');
    },
    product_detail: function(req, res) {
        let id = req.params.id;
        
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
                {nombre: {[op.like]: '%' + busqueda + '%'}}
            ]
        })
        .then(function(telefonos){
            // res.send(telefonos)
            res.render('search-results', {telefonos: telefonos, resultado: busqueda});
        })
        .catch(function(error){
            res.send(error)
        })
    }
   
}



module.exports = controlador_product;
