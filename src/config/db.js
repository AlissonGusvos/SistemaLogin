/*const mysql = require('mysql2');
require('dotenv').config();

const connection = mysql.createConnection({
    host: process.env.HOST,
    user: process.env.USER,
    password: process.env.PASSWORD,
    database: process.env.DATABASE
})

connection.connect((err)=>{
    if (err) {
        console.log('Erro ao conectar: ', err.stack);
        return;
    }

    console.log('Conectado ao DataBase coomo id: ', connection.threadId);
});

module.exports = connection;*/

const mysql = require('mysql2/promise');
require('dotenv').config();

const pool = mysql.createPool({
    host: process.env.HOST,
    user: process.env.USER,
    password: process.env.PASSWORD,
    database: process.env.DATABASE,
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
});

module.exports = pool;
