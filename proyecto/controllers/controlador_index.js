const lista_telefonos = require('../db/telefonos');
const lista_usuarios = require('../db/usuarios');
const lista_comentarios = require('../db/comentarios');

const controlador_index = {
    index: function(req, res) {
        res.render('index', {lista_telefonos: lista_telefonos});
    },
    search_results: function(req, res) {
        res.render('search_results');
    }
}

module.exports = controlador_index;