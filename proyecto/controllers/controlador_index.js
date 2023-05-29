const db = require('../database/models'); //alias del modelo
const Producto = db.Producto; // q es esto??? 

const controlador_index = {
  index: function(req, res) {
    Producto.findAll() 
      .then(lista_telefonos => {
        res.render('index', { lista_telefonos: lista_telefonos });
      })
      .catch(error => {
        console.log(error);
       // res.render('error', { error: 'Error al obtener la lista de teléfonos' });
      });
  },
  search_results: function(req, res) {
    res.render('search-results', { resultado: req.query.search });
  }
};

module.exports = controlador_index;