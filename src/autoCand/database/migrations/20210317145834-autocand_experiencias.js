'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('autocand_experiencias', {
      id: { type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true },
      candidato_id: {
        type: Sequelize.INTEGER, allowNull: false,
        references: { model: 'autocand_candidatos', key: 'id' },
        onUpdate: 'CASCADE', onDelete: 'CASCADE'
      },
      nomeEmpresa: { type: Sequelize.STRING, allowNull: false },
      nomeCargo: { type: Sequelize.STRING, allowNull: false },
      UltimoSalario: { type: Sequelize.STRING, allowNull: false },
      dataEntrada: { type: Sequelize.DATE, allowNull: false },
      dataSaida: { type: Sequelize.DATE, allowNull: false },
      motivoSaida: { type: Sequelize.STRING, allowNull: false },

      possuiBeneficio: { type: Sequelize.BOOLEAN, allowNull: false },
      tipoBeneficio: { type: Sequelize.STRING, allowNull: true },
      valorBeneficio: { type: Sequelize.STRING, allowNull: true },

      possuiBonus: { type: Sequelize.BOOLEAN, allowNull: false },
      tipoBonus: { type: Sequelize.STRING, allowNull: true },
      valorBonus: { type: Sequelize.STRING, allowNull: true },

      possuiComissao: { type: Sequelize.BOOLEAN, allowNull: false },
      tipoComissao: { type: Sequelize.STRING, allowNull: true },
      valorComissao: { type: Sequelize.STRING, allowNull: true },

      telefoneEmpresa: { type: Sequelize.BOOLEAN, allowNull: false },
      ufEmpresa: { type: Sequelize.BOOLEAN, allowNull: false },
      cidadeEmpresa: { type: Sequelize.BOOLEAN, allowNull: false },
      createdAt: { type: Sequelize.DATE, allowNull: false },
      updatedAt: { type: Sequelize.DATE, allowNull: false }

    });

  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('autocand_experiencias');

  }
};
