'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('autocand_candidato_vaga', {
      iid: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
      },
      vaga_id: {
        type: Sequelize.INTEGER,
        references: { model: 'autocand_vagas', key: 'id' },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      },
      candidato_id: {
        type: Sequelize.INTEGER,
        references: { model: 'autocand_candidatos', key: 'id' },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      },
      createdAt: {
        type: Sequelize.DATE,
        allowNull: false
      },
      updatedAt: {
        type: Sequelize.DATE,
        allowNull: false
      }
    });

  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('autocand_candidato_vaga');

  }
};
