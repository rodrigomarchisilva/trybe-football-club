'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {

    await queryInterface.createTable('users', {
      id: { allowNull: false, type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true },
      username: { allowNull: false, type: Sequelize.STRING, unique: true },
      role: {allowNull: false, type: Sequelize.STRING },
      email: { allowNull: false, type: Sequelize.STRING, unique: true },
      password: {allowNull: false, type: Sequelize.STRING },
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('users');
  }
};