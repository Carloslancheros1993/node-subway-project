'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Tarjeta extends Model {
    static associate(models) {
    this.hasMany(models.Recargas, {
      foreignKey: "idTarjeta",
    });
    }
  };
  Tarjeta.init({
    tipo: DataTypes.STRING,
    saldo: DataTypes.NUMERIC
  }, {
    sequelize,
    modelName: 'Tarjeta',
  });
  return Tarjeta;
};