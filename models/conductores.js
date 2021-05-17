'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Conductores extends Model {
    static associate(models) {
      this.belongsToMany(models.Metros, {
        through: "Metros_Conductores",
        foreignKey: "idConductor"
      });
    }
  };
  Conductores.init({
    nombre: DataTypes.STRING,
    apellido: DataTypes.STRING,
    telefono: DataTypes.STRING,
    edad: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Conductores',
  });
  return Conductores;
};