'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface.createTable('user_criteria', {
				id: {
					allowNull: false,
					autoIncrement: true,
					primaryKey: true,
					type: Sequelize.INTEGER
				},
				userId: {
					type: Sequelize.INTEGER,
					references: {
						model: "user",
						key: 'id'
					},
				},
        criteriaId: {
          type: Sequelize.INTEGER,
          references: {
            model: "criteria",
            key: 'id'
          },
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
					defaultValue: null,
					type: Sequelize.DATE
				},
				deletedAt: {
					allowNull: true,
					defaultValue: null,
					type: Sequelize.DATE
				}
			},
			{
				freezeTableName: true
			});
	},
	async down(queryInterface, Sequelize) {
		await queryInterface.dropTable('user_criteria');
	}
};