const mysql = require('mysql2');
const connection = mysql.createConnection({
    host: '172.20.1.2',
    user: 'mauroslucios',
    password: 'P@SSw0r4',
    database: 'nodejs_mysql'

});

connection.connect(function(err){
    if(err){
        return console.error('error: ' + err.message);
    }
    console.log('Connected to the MySQL Server.');
})

var pool = mysql.createPool({
    connectionLimit: 5,
    host: '172.20.1.2',
    user:'mauroslucios',
    password: 'P@SSw0r4',
    database: 'nodejs_mysql'
})