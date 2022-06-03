'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    const isNull  = { allowNull: true }
    const notNull = { allowNull: false }
    const bool    = { type: Sequelize.BOOLEAN, ...notNull, defaultValue: false }
    
    await queryInterface.addColumn('Products', 'is_published', bool)
  },

  async down (queryInterface, Sequelize) {
   
    await queryInterface.removeColumn('Products', 'is_published')

  }
};