const {db,DataTypes}= require('../utils/database')

const Articulos = db.define("articulos", {
    id:{
        type:DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    codigo:{
        type:DataTypes.STRING,
        allowNull:false
    },
    descripcion:{
        type:DataTypes.TEXT,
        allowNull:false
    },
    precio:{
        type:DataTypes.DOUBLE,
        allowNull:false
    },
    activo:{
        type:DataTypes.BOOLEAN,
        defaultValue:false
    }
})
module.exports= {Articulos};