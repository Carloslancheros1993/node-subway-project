'use strict';

const registroLineas = require('../../lineas');

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Lineas', registroLineas, {});
  },

  down: async (queryInterface, Sequelize) => {
  }
};
