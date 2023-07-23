'use strict';

const moment = require("moment");
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('roles',[
      {
        name:"super-admin",
        level:0,
        createdAt:moment().toDate(),
        updatedAt:null,
        deletedAt:null
      },
      {
        name:"admin",
        level:1,
        createdAt:moment().toDate(),
        updatedAt:null,
        deletedAt:null
      },
      {
        name:"manager",
        level:2,
        createdAt:moment().toDate(),
        updatedAt:null,
        deletedAt:null
      },
      {
        name:"user",
        level:3,
        createdAt:moment().toDate(),
        updatedAt:null,
        deletedAt:null
      },
      {
        name:"member",
        level:4,
        createdAt:moment().toDate(),
        updatedAt:null,
        deletedAt:null
      },
      {
        name:"viewer",
        level:5,
        createdAt:moment().toDate(),
        updatedAt:null,
        deletedAt:null
      },
      {
        name:"contributor",
        level:6,
        createdAt:moment().toDate(),
        updatedAt:null,
        deletedAt:null
      },
      {
        name:"help-desk",
        level:6,
        createdAt:moment().toDate(),
        updatedAt:null,
        deletedAt:null
      },
      {
        name:"affiliate",
        level:7,
        createdAt:moment().toDate(),
        updatedAt:null,
        deletedAt:null
      },
      {
        name:"api",
        level:8,
        createdAt:moment().toDate(),
        updatedAt:null,
        deletedAt:null
      },
    ],{
      nest:true
    })
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
