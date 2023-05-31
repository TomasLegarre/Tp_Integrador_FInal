
var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
let session = require('express-session')

// Prueba Vic

//requiero el modulo propio
let indexRouter = require('./routes/index');
let productslRouter = require('./routes/product')
let usersRouter = require('./routes/users')


var app = express();
// nuevo cambio

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');



app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({
  extended: false
}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

/* Configuración para que la sesion se inicie */
app.use(session({
  secret: 'myApp',
  resave: false,
  saveUninitialized: true
}));

/* Configurar locals */
app.use(function(req, res, next) {
  /* la logica para pasar de session a la variable locals */

  if (req.session.usuarios != undefined) {
    res.locals.usuarios = req.session.usuarios;
    return next()
  }
  return next();
});




/* configurar cookies de usuario*/
app.use(function(req, res, next) {
  
  /* si existe la cooki en el navegador && no existe el usuario en la variable session */
  if (req.cookies.usuariosId != undefined && req.session.usuarios == undefined) {
    let idUsuariosEnCookie = req.cookies.usuariosId;
    db.Usuarios.findByPk(idUsuariosEnCookie)
    .then((usuarios) => {

      req.session.usuarios = usuarios.dataValues;
      res.locals.usuarios = usuarios.dataValues;

      return next();
      
    }).catch((err) => {
      console.log(err);
    });

  } else {
    /* Pasa al siguiente */
    return next();
  }
});

/* en estas lineas se requiren los modulos propios de rutas*/
//metodo // solicito el recurso 
//express utiliza mi modulo con los prefijos 
app.use('/', indexRouter);
app.use('/products', productslRouter)
app.use('/users', usersRouter)
//       prefijo    


//localhost:3000/products


// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;