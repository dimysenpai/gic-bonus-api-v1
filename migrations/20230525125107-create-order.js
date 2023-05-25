'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Orders', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      matriculation: {
        allowNull: false,
        type: Sequelize.STRING
      },
      stardate: {
        allowNull: false,
        type: Sequelize.DATE
      },
      enddate: {
        allowNull: true,
        type: Sequelize.DATE
      },
      state: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      idcustomer: {
        allowNull: true,
        type: Sequelize.INTEGER
      },
      iddesigner: {
        allowNull: true,
        type: Sequelize.INTEGER
      },
      iddeliver: {
        allowNull: true,
        type: Sequelize.INTEGER
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Orders');
  }
};