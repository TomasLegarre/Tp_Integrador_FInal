let express = require ("express");
let router = express.Router();
let registerController = require("../controllers/registerController")

router.get('/register', registerController.register);
  



module.exports = router;
