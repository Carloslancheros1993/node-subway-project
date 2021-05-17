'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Estaciones extends Model {
    static associate(models) {
      this.belongsToMany(models.Lineas, {
        through: "Lineas_Estaciones",
        foreignKey: "idEstacion"
      });
    }
  };
  Estaciones.init({
    nombre: DataTypes.STRING,
    ubicacion: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Estaciones',
  });
  return Estaciones;
};