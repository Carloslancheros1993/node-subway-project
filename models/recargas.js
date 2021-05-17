'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Recargas extends Model {
    static associate(models) {
      this.belongsTo(models.Tarjeta, {
        foreignKey: "idTarjeta"
      })
    }
  };
  Recargas.init({
    idTarjeta: DataTypes.INTEGER,
    fecha: DataTypes.DATE,
    valorRecarga: DataTypes.NUMERIC
  }, {
    sequelize,
    modelName: 'Recargas',
  });
  return Recargas;
};