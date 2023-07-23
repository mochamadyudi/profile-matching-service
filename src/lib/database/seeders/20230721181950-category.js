'use strict';

const moment = require("moment/moment");
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('category',[
      {
        name:"Pegunungan",
        slug:"pegunungan",
        "color":"#3a3a3a",
        background:"#ffffff",
        createdAt:moment().toDate(),
        updatedAt:null,
        deletedAt:null
      },
      {
        name:"Bahari",
        slug:"bahari",
        "color":"#3a3a3a",
        background:"#ffffff",
        createdAt:moment().toDate(),
        updatedAt:null,
        deletedAt:null
      },
      {
        name:"Budaya Indonesia",
        slug:"budaya-indonesia",
        "color":"#3a3a3a",
        background:"#ffffff",
        createdAt:moment().toDate(),
        updatedAt:null,
        deletedAt:null
      },
      {
        name:"Pertaninan",
        slug:"pertanian",
        "color":"#3a3a3a",
        background:"#ffffff",
        createdAt:moment().toDate(),
        updatedAt:null,
        deletedAt:null
      },
    ],{
      nest:true
    })
    await queryInterface.bulkInsert('category_value',[
      {
        name:"Tidak Memuaskan",
        value:0,
        createdAt:moment().toDate(),
        updatedAt:null,
        deletedAt:null
      },
      {
        name:"Perlu Perbaikan",
        value:1,
        createdAt:moment().toDate(),
        updatedAt:null,
        deletedAt:null
      },
      {
        name:"Memenuhi Harapan",
        value:2,
        createdAt:moment().toDate(),
        updatedAt:null,
        deletedAt:null
      },
      {
        name:"Melebihi Harapan",
        value:3,
        createdAt:moment().toDate(),
        updatedAt:null,
        deletedAt:null
      },
      {
        name:"Luar Biasa",
        value:4,
        createdAt:moment().toDate(),
        updatedAt:null,
        deletedAt:null
      }
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
