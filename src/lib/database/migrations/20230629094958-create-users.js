const uuid = require('uuid')

'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface.createTable('user', {
				id: {
					allowNull: false,
					autoIncrement: true,
					primaryKey: true,
					type: Sequelize.INTEGER
				},
				uuid: {
					type: Sequelize.UUID,
					defaultValue: Sequelize.UUIDV4,
					allowNull: false,
					primaryKey: true
				},
				fullName: {
					allowNull: true,
					type: Sequelize.STRING,
					defaultValue: null,
				},
				email: {
					type: Sequelize.STRING,
					unique: true,
					allowNull: false
				},
				email_verified_at: {
					type: Sequelize.DATE
				},
				salt: {
					type: Sequelize.STRING,
          allowNull:false,
				},
				password: {
					type: Sequelize.STRING,
          allowNull:false,
				},
				remember_token: {
					allowNull: true,
					type: Sequelize.STRING,
					defaultValue: null,
				},
				activated: {
					type: Sequelize.BOOLEAN,
					defaultValue: true
				},
				status: {
					type: Sequelize.DataTypes.ENUM('active', 'disabled', 'inactive'),
					defaultValue: 'inactive',
				},
				signup_ip_address: {
					allowNull: true,
					type: Sequelize.STRING,
					defaultValue: null,
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
		await queryInterface.dropTable('user');
	}
};