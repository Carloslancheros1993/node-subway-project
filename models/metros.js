'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Metros extends Model {
    static associate(models) {
      this.belongsToMany(models.Conductores, {
        through: "Metros_Conductores",
        foreignKey: "idMetro"
      });
      this.belongsTo(models.Lineas, {
        foreignKey: "idLinea"
      });
    }
  };
  Metros.init({
    idLinea: DataTypes.INTEGER,
    vagones: DataTypes.INTEGER,
    capacidad: DataTypes.INTEGER,
    modelo: DataTypes.STRING,
    asientos: DataTypes.INTEGER,
    tipo: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Metros',
  });
  return Metros;
};