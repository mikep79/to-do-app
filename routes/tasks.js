var router = require('express').Router();
var pool = require('../modules/pool');

// get request to database for all rows
router.get('/', function (req, res) {
    pool.connect(function (conErr, client, done) {
        if (conErr) {
            console.log('Error in tasks.js: ', conErr);
            res.sendStatus(500);
        } else {
            client.query('SELECT * FROM tasks;', function (queryErr, resultObj) {
                done();
                if (queryErr) {
                    console.log('Tasks.js error: ', queryErr);
                    res.sendStatus(500);
                } else {
                    console.log(resultObj.rows);
                    res.send(resultObj.rows);
                }
            });
        }
    });
});

// POST req to DB to insert new task
router.post('/', function(req, res){
    var taskInfo = req.body.task;
    pool.connect(function(conErr, client, done){
        if (conErr){
            console.log('Err in task con: ', conErr);
            res.sendStatus(500);
        } else {
            client.query('INSERT INTO tasks (task, completed) VALUES ($1, $2);', [taskInfo, false], 
            function (queryErr, resultObj){
                done();
                if (queryErr){
                    console.log('QueryErr in tasks.js: ', queryErr);
                    res.sendStatus(500);
                } else {
                    res.sendStatus(201);
                }
            });
        }
    });
});

module.exports = router;