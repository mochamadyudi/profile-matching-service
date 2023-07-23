'use strict';

const moment = require("moment");
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('gap_mapping',[
      {
        gap:0,
        weight:5,
        description:"Kompetensi Sesuai Kebutuhan",
        createdAt:moment().toDate(),
        updatedAt:moment().toDate(),
      },
      {
        gap:1,
        weight:4.5,
        description:"Kompetensi Kelebihan 1 tingkat/level",
        createdAt:moment().toDate(),
        updatedAt:moment().toDate(),
      },
      {
        gap:-1,
        weight:4,
        description:"Kompetensi Kekurangan 1 tingkat/level",
        createdAt:moment().toDate(),
        updatedAt:moment().toDate(),
      },
      {
        gap:2,
        weight:3.5,
        description:"Kompetensi Kelebihan 2 tingkat/level",
        createdAt:moment().toDate(),
        updatedAt:moment().toDate(),
      },
      {
        gap:-2,
        weight:3,
        description:"Kompetensi kekurangan 2 tingkat/level",
        createdAt:moment().toDate(),
        updatedAt:moment().toDate(),
      },
      {
        gap:3,
        weight:2.5,
        description:"Kompetensi Kelebihan 3 tingkat/level",
        createdAt:moment().toDate(),
        updatedAt:moment().toDate(),
      },
      {
        gap:-3,
        weight:2,
        description:"Kompetensi kekurangan 3 tingkat/level",
        createdAt:moment().toDate(),
        updatedAt:moment().toDate(),
      },
      {
        gap:4,
        weight:1.5,
        description:"Kompetensi kelebihan 4 tingkat/level",
        createdAt:moment().toDate(),
        updatedAt:moment().toDate(),
      },
      {
        gap:-4,
        weight:1,
        description:"Kompetensi kekurangan 4 tingkat/level",
        createdAt:moment().toDate(),
        updatedAt:moment().toDate(),
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
