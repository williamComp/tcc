/*
Este arquivo serve para conectar o programa com o banco de dados MySQL.
*/

//import mysql from 'mysql2/promise';


// Incluir dependência MySQL
const mysql = require('mysql2');



const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '123456',
    database: 'db_egressos'
});

//Realizar conexão com o bancos de dados
connection.connect(function (err) {
    console.log("Conexão com o banco de dados realizada com sucesso.");
});

connection.query('SELECT cpf, curso, aluno, ano_ingresso, ano_integralizacao FROM tb_egressos', function (err, rows, fields) {
    if (!err) {
        console.log('Resultado: ', rows);
    } else {
        console.log('Erro: consulta não realizada com sucesso.');
    }
});



