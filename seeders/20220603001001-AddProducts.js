'use strict';

//reusable Description
const description = `Thebuddha doublerainbow aura biomat organic ancientspiritualtraditions sacredsexuality gojiberries pastlife, healingtonic co-op divinefeminine herbaltea visualization vinyasa macrobiotic, yoni morphicresonance forest vitamix popcornwithbrewersyeast yerbamatte hempseed. Ancientspiritualtraditions healingtonic rainbow integral sacredintegration midwifery nonlinear breathwork rawthenticself singingbowltherapy, vinyasa malabeads monogamish radicalhonesty coldplunge prius kombucha beltane tapping, mind-body feeling.`

const [ createdAt, updatedAt ] = [ new Date(), new Date() ]

module.exports = {
  async up (queryInterface, Sequelize) {
    return await queryInterface.bulkInsert('Products', [
      { 
        id: 1, 
        title: 'Amethyst', 
        slug: 'chakra-crystals', 
        price: 19.99, 
        is_published: true,
        description, createdAt, updatedAt
      },
      { 
        id: 2, 
        title: 'Smoky Quartz', 
        slug: 'chakra-crystals', 
        price: 12.99, 
        is_published: true,
        description, createdAt, updatedAt
      },
      { 
        id: 3, 
        title: 'Carnelian', 
        slug: 'chakra-crystals', 
        price: 9.99, 
        is_published: true,
        description, createdAt, updatedAt
      },
      { 
        id: 4, 
        title: 'Azurite', 
        slug: 'chakra-crystals', 
        price: 17.99, 
        is_published: true,
        description, createdAt, updatedAt
      }
    ])
  },

  async down (queryInterface, Sequelize) {
    return await queryInterface.bulkDelete('Products', null, {})
  }
};