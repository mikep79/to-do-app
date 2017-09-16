var router = require('express').Router();

//test array
var array = [1,2,3];

router.get('/', function(req, res){
    res.send(array);
});

router.post('/', function(req, res){
    var taskInfo = req.body.task;
    console.log('Task info from client: ', taskInfo);
    res.sendStatus(200);
});

module.exports = router;