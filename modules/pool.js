var Pool = require('pg').Pool;
console.log(Pool);

var config = {
    host: 'localhost',
    port: 5432,
    database: 'to-do-list',
    max: 20
};

var myPool = new Pool(config);
module.exports = myPool;
