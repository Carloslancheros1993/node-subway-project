'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Lineas_Estaciones extends Model {
    static associate(models) {
      this.belongsTo(models. Estaciones, {
        foreignKey: "idEstacion"
      });
      this.belongsTo(models. Lineas, {
        foreignKey: "idLinea"
      });
    }
  };  
  Lineas_Estaciones.init({
    idEstacion: DataTypes.INTEGER,
    idLinea: DataTypes.INTEGER,
    origen: DataTypes.STRING,
    destino: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Lineas_Estaciones',
  });
  return Lineas_Estaciones;
};