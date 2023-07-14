'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface.createTable('user_preference_category', {
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
				categoryId: {
					type: Sequelize.INTEGER,
					references: {
						model: "category",
						key: 'id'
					},
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
		await queryInterface.dropTable('user_preference_category');
	}
};