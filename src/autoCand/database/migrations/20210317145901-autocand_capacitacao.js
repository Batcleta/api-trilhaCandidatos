'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('autocand_capacitacao', {
      id: { type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true },
      candidato_id: {
        type: Sequelize.INTEGER, allowNull: false,
        references: { model: 'autocand_candidatos', key: 'id' },
        onUpdate: 'CASCADE', onDelete: 'CASCADE'
      },
      tipoDoCurso: { type: Sequelize.STRING, allowNull: false },
      nomeCurso: { type: Sequelize.STRING, allowNull: false },
      instituicaoCurso: { type: Sequelize.STRING, allowNull: false },
      dataInicioCurso: { type: Sequelize.DATE, allowNull: false },
      dataConclusaoCurso: { type: Sequelize.DATE, allowNull: false },
      createdAt: { type: Sequelize.DATE, allowNull: false },
      updatedAt: { type: Sequelize.DATE, allowNull: false }
    });

  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('autocand_capacitacao');

  }
}