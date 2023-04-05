let db = require("../db/tel");

let registerController = {
    register: function(req, res) {
        res.render('index'); // habria que mandarlo a la pagina de register que todavia no esta hecha (cambiar por index)
      }
} 

module.exports = registerController; 