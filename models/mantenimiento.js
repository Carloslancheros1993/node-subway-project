'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Mantenimiento extends Model {
    static associate(models) {
      this.belongsTo(models.Metros, {
        foreignKey: "idMetro"
      });
    }
  };
  Mantenimiento.init({
    idMetro: DataTypes.INTEGER,
    fecha: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'Mantenimiento',
  });
  return Mantenimiento;
};