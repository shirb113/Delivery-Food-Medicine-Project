var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');

var logger = require('morgan');
var cors = require("cors");
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var blogRouter = require('./routes/blog');
var chatRouter = require('./routes/chatMsg');
// var testDBRouter = require("./routes/testDB");//add as test
var workScheduleRouter = require('./routes/workSchedule')
var packagesRouter = require('./routes/packages')

var app = express();


// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/usersInfo', usersRouter);
app.use('/blog', blogRouter);
app.use('/chatMsg', chatRouter);
app.use('/workSchedule', workScheduleRouter);
app.use('/packages', packagesRouter);


// app.use("/testDB", testDBRouter);//add as test



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
