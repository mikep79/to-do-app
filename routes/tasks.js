var router = require('express').Router();
var pool = require('../modules/pool');

// get request to database
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

// router.post('/', function (req, res) {
//     var taskInfo = req.body.task;
//     array.push(taskInfo);
//     console.log('Task info from client: ', taskInfo);
//     res.sendStatus(200);
// });

module.exports = router;