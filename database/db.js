import { Sequelize } from 'sequelize';

const db = new Sequelize ('pedido', 'root','admin123',{
    host:'localhost',
    dialect: 'mysql',
})

export default db

/*const mysql2 = require('mysql2')

// Bases de Datas
const basedatos = mysql2.createConnection({
    host:'localhost',
    user: 'root',
    password:'admin123',
    database: 'integracion',
});

module.exports = basedatos;*/

