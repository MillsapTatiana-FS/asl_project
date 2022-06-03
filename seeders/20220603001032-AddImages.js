'use strict';

const [ createdAt, updatedAt ] = [ new Date(), new Date() ]

module.exports = {
  async up (queryInterface, Sequelize) {
    return await queryInterface.bulkInsert('Images', [
      { id: 1, variantId: 1, extension: '.jpeg', createdAt, updatedAt },
      { id: 2, variantId: 2, extension: '.jpeg', createdAt, updatedAt },
      { id: 3, variantId: 3, extension: '.jpeg', createdAt, updatedAt },
      { id: 4, variantId: 4, extension: '.jpeg', createdAt, updatedAt }
    ])
  },
  
  async down (queryInterface, Sequelize) {
    return await queryInterface.bulkDelete('Images', null, {})
  }
};
