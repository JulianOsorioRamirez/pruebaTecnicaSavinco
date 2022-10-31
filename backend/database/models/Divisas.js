const { Model, DataTypes } = require('sequelize');
const sequelize = require('../db');

// class Divisas extends Model {}
const Divisas = sequelize.define('Divisas', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
      },
    pais: DataTypes.STRING,
    grupo: DataTypes.NUMBER,
    socios: DataTypes.NUMBER,
    acciones: DataTypes.NUMBER,
    prestamos: DataTypes.NUMBER,
    importe: DataTypes.NUMBER,
}, {
    sequelize,
    modelName: "Divisas"
});

module.exports = Divisas;