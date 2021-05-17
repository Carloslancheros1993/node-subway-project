'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Metros_Conductores extends Model {
    static associate(models) {
      this.belongsTo(models. Conductores, {
        foreignKey: "idConductor"
      });
      this.belongsTo(models. Metros, {
        foreignKey: "idMetro"
      });
    }
  };
  Metros_Conductores.init({
    idConductor: DataTypes.INTEGER,
    idMetro: DataTypes.INTEGER,
    turno: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Metros_Conductores',
  });
  return Metros_Conductores;
};