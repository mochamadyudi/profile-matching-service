'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('option', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      opt_name: {
        type: Sequelize.STRING
      },
      opt_value: {
        type: Sequelize.TEXT
      },
      opt_type: {
        type: Sequelize.STRING
      },
      autoload: {
        type: Sequelize.STRING,
        unique:true,
        values: ['yes'],
        defaultValue:'yes'
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
    }, {
      freezeTableName: true
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('option');
  }
};