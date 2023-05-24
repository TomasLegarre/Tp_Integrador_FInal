/*const lista_telefonos = require('../db/telefonos');
const lista_usuarios = require('../db/usuarios');
const lista_comentarios = require('../db/comentarios'); */

const db = require ('../database/models');
const usuarios = db.Usuario; //alias
const comentarios = db.Comentario; //alias
const index = db.Index; //alias

const controlador_product = {

 
    product_add: function(req, res) {
        res.render('product_add');
    },
    product_detail: function(req, res) {
        let id = req.params.id;
        let telefono
        for (let i = 0; i < lista_telefonos.length; i++) {
            if (lista_telefonos[i].id == id) {
                telefono = lista_telefonos[i];
            }
        }

        /// Buscar los comentarios del producto
        let lista_comentarios_producto = [];
        for (let i = 0; i < lista_comentarios.length; i++) {
            if (lista_comentarios[i].producto_id == id) {
                lista_comentarios_producto.push(lista_comentarios[i]);
            }
        }

        /// Buscar los usuarios de los comentarios
        let lista_usuarios_comentarios = [];
        for (let i = 0; i < lista_comentarios_producto.length; i++) {
            for (let j = 0; j < lista_usuarios.length; j++) {
                if (lista_comentarios_producto[i].usuario_id == lista_usuarios[j].id) {
                    lista_usuarios_comentarios.push(lista_usuarios[j]);
                }
            }
        }

        /// Crear un array de objetos con los comentarios y los usuarios
        let lista_comentarios_con_usuarios = [];
        for (let i = 0; i < lista_comentarios_producto.length; i++) {
            let comentario_con_usuario = {
                comentario: lista_comentarios_producto[i].comentario,
                usuario: lista_usuarios_comentarios[i]
            }
            lista_comentarios_con_usuarios.push(comentario_con_usuario);
        }

        res.render('product_detail', {telefono: telefono, lista_comentarios: lista_comentarios_con_usuarios});
    }
   
}



module.exports = controlador_product;
