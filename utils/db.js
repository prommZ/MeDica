const mysql = require('mysql2');

const db = mysql.createConnection({
    host    : 'localhost',
    user    : 'root',
    password: 'Sonu@4200',
    database: 'HospitalManagementSystem'
});

db.connect((err) => {
    if(err) throw err;
    console.log("MySQL connected");
});

module.exports = db;