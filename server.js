//require dependencies
var express = require('express');
var bodyParser = require('body-parser');
var port = 5500;
var app = express();
// route dependencies
var index = require('./routes/index.js');
var tasks = require('./routes/tasks.js');

//spin up server
app.listen(port, function () {
    console.log('listening on port: ', port);
});

//middleware for jQuery appending
app.use(bodyParser.urlencoded({extended: true}));
// middleware for ng appending
app.use(bodyParser.json());

app.use(express.static('public'));

//routes
app.use('/', index);
app.use('/tasks', tasks);