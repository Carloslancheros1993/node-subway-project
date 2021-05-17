'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Lineas extends Model {
    static associate(models) {
      this.belongsToMany(models.Estaciones, {
        through: "Lineas_Estaciones",
        foreignKey: "idLinea"
      });
    }
  };
  Lineas.init({
    nombre: DataTypes.STRING,
    color: DataTypes.STRING,
    horaPartida: DataTypes.DATE,
    horaLlegada: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'Lineas',
  });
  return Lineas;
};