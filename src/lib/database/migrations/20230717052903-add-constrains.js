'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
    Promise.all([
      await queryInterface.sequelize.transaction(async (transaction)=> {
        await queryInterface.changeColumn('criteria','travelId', {
          type: Sequelize.DataTypes.INTEGER,
          allowNull: false,
        },{ transaction })
      }),
      await queryInterface.addConstraint('criteria',{
        type: "FOREIGN KEY",
        name: "FK_CRITERIA_TRAVEL_ID",
        fields: ['travelId'],
        references: {
          table:"travel",
          field:"id"
        },
        onDelete: "CASCADE",
      })
    ])
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
  }
};
