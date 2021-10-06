'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('autocand_vagas', {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
      },
      vagaEmpresa: {
        type: Sequelize.STRING,
        allowNull: false
      },
      nomeVaga: {
        type: Sequelize.STRING,
        allowNull: false
      },
      vagaDataLimite: {
        type: Sequelize.DATE,
        allowNull: false
      },
      vagaDescr: {
        type: Sequelize.STRING,
        allowNull: false
      },
      reqIdade: {
        type: Sequelize.BOOLEAN,
        allowNull: false
      },
      minIdade: {
        type: Sequelize.STRING,
        allowNull: true
      },
      maxIdade: {
        type: Sequelize.STRING,
        allowNull: true
      },
      reqExp: {
        type: Sequelize.BOOLEAN,
        allowNull: false
      },
      reqExpAnos: {
        type: Sequelize.STRING,
        allowNull: true
      },
      residProximo: {
        type: Sequelize.BOOLEAN,
        allowNull: false
      },
      regContrato: {
        type: Sequelize.STRING,
        allowNull: false
      },
      vagaPeriodo: {
        type: Sequelize.STRING,
        allowNull: true
      },
      faixaSalarial: {
        type: Sequelize.BOOLEAN,
        allowNull: false
      },
      faixaSalarialInicial: {
        type: Sequelize.STRING,
        allowNull: true
      },
      faixaSalarialfinal: {
        type: Sequelize.STRING,
        allowNull: true
      },
      reqCapacita: {
        type: Sequelize.BOOLEAN,
        allowNull: false
      },
      capacitaCurso: {
        type: Sequelize.STRING,
        allowNull: true
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
    await queryInterface.dropTable('autocand_vagas');

  }
};
