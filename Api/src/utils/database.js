const {Sequelize, DataTypes} = require('sequelize');
require("dotenv").config();
//Establecemos la conexion
const {base_dato_mysql,username_db_mysql,password_db_mysql,hos}=process.env

const db = new Sequelize(`mysql://${username_db_mysql}:${password_db_mysql}@${hos}:3306/${base_dato_mysql}` ,{
    logging: false,
    native: false,
})



module.exports={db,DataTypes}


