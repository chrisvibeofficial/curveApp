'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('employePerformances', {
      id: {
        allowNull: false,

        primaryKey: true,
        type: Sequelize.UUID
      },
      employeeId: {
        type: Sequelize.UUID,
        references: {
          model: 'employeinfo',
          key: "id"
        },
        onUpdate: "CASCADE",
        onDelete: "CASCADE"
      },
      rating: {
        type: Sequelize.STRING
      },
      puctuality: {
        type: Sequelize.DATE
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
    await queryInterface.dropTable('employePerformances');
  }
};