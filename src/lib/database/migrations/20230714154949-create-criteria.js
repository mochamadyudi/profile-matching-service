'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('criteria', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      travelId: {
        type: Sequelize.INTEGER
      },
      label: {
        type: Sequelize.STRING
      },
      description: {
        type: Sequelize.STRING
      },
      value: {
        type: Sequelize.INTEGER
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: true,
        defaultValue:null,
        type: Sequelize.DATE
      },
      deletedAt: {
        allowNull: true,
        defaultValue:null,
        type: Sequelize.DATE
      }
    },
      {
        freezeTableName: true
      });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('criteria');
  }
};