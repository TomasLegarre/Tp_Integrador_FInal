var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

//requiero el modulo propio
let indexRouter = require('./routes/index');
let productslRouter = require('./routes/product')
let usersRouter = require('./routes/users')


var app = express();
// nuevo cambio

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

/* en estas lineas se requiren los modulos propios de rutas*/


app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({
  extended: false
}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

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