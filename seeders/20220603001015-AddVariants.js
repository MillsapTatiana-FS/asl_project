'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
  
// Reusable Description
const description = "Run it up the flag pole spinning our wheels. This is not the hill i want to die on digital literacy yet dear hiring manager: yet run it up the flagpole, ping the boss and circle back so service as core &innovations as power makes our brand globalize."

const [ createdAt, updatedAt ] = [ new Date(), new Date() ]

module.exports = {

  async up (queryInterface, Sequelize) {
    return await queryInterface.bulkInsert('Variants', [
      { id: 1, title: 'X-Small', slug: 'x-small', description, price: 14.99, productId: 1, inventory: 2, createdAt, updatedAt  },
      { id: 2, title: 'Small', slug: 'small', description, price: 19.99, productId: 1, inventory: 24, createdAt, updatedAt  },
      { id: 3, title: 'Medium', slug: 'medium', description, price: 24.99, productId: 2, inventory: 0, createdAt, updatedAt  },
      { id: 4, title: 'Large', slug: 'large', description, price: 29.99, productId: 2, inventory: 10, createdAt, updatedAt  }
    ])
  },

  async down (queryInterface, Sequelize) {
    return await queryInterface.bulkDelete('Variants', null, {})
  }
};
