let db = require("../db/tel");

let productController = {
    todos: function(req, res) {
        res.render('index');
      }
}

module.exports = productController;