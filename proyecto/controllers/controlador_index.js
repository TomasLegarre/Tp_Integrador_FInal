const db = require('../database/models');
const producto = db.Producto; //alias del modelo

const controlador_index = {
  index: function(req, res) {
    let rel = {
      include: [{association: "usuarios"}]
    };
    producto.findAll(rel) 
      .then(lista_telefonos => {
        //res.render('index', { lista_telefonos: lista_telefonos });
        return res.send(lista_telefonos)
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