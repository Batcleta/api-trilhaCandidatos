'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    queryInterface.createTable('autocand_candidatos', {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
      },
      cpfCandidato: { /* ok */
        type: Sequelize.STRING,
        allowNull: false
      },
      possuiPis: {/* ok */
        type: Sequelize.BOOLEAN,
        allowNull: false
      },
      possuiTitulo: {/* ok */
        type: Sequelize.BOOLEAN,
        allowNull: false
      },
      possuiDispensa: {/* ok */
        type: Sequelize.BOOLEAN,
        allowNull: false
      },
      possuiCnh: {/* ok */
        type: Sequelize.BOOLEAN,
        allowNull: false
      },
      categoriaCnh: {/* ok */
        type: Sequelize.STRING,
        allowNull: false
      },
      validadeCnh: {/* ok */
        type: Sequelize.DATE,
        allowNull: false
      },
      nomeCandidato: {/* ok */
        type: Sequelize.STRING,
        allowNull: false
      },
      sobrenomeCandidato: {/* ok */
        type: Sequelize.STRING,
        allowNull: false
      },
      dataNascimento: {/* ok */
        type: Sequelize.DATE,
        allowNull: false
      },
      sexoCandidato: {/* ok */
        type: Sequelize.STRING,
        allowNull: false
      },
      idadeCandidato: {/* ok */
        type: Sequelize.INTEGER,
        allowNull: false
      },
      religiaoCandidato: {/* ok */
        type: Sequelize.STRING,
        allowNull: true
      },
      estadoCivil: {/* ok */
        type: Sequelize.STRING,
        allowNull: false
      },
      fumante: {/* ok */
        type: Sequelize.BOOLEAN,
        allowNull: false
      },
      naturaCandidato: {/* ok */
        type: Sequelize.STRING,
        allowNull: false
      },
      possuiFilhos: {/* ok */
        type: Sequelize.BOOLEAN,
        allowNull: false
      },
      quantosFilhos: {/* ok */
        type: Sequelize.STRING,
        allowNull: true
      },
      idadeDosFilhos: {/* ok */
        type: Sequelize.STRING,
        allowNull: true
      },
      possuiCuidador: {/* ok */
        type: Sequelize.BOOLEAN,
        allowNull: true
      },
      cepCandidato: {/* ok */
        type: Sequelize.STRING,
        allowNull: false
      },
      logradouroCandidato: {/* ok */
        type: Sequelize.STRING,
        allowNull: false
      },
      numeroEndereco: {/* ok */
        type: Sequelize.STRING,
        allowNull: false
      },
      complementoEndereco: {/* ok */
        type: Sequelize.STRING,
        allowNull: true
      },
      bairroCandidato: {/* ok */
        type: Sequelize.STRING,
        allowNull: false
      },
      municipioCandidato: {/* ok */
        type: Sequelize.STRING,
        allowNull: false
      },
      ufCandidato: {/* ok */
        type: Sequelize.STRING,
        allowNull: false
      },
      residenciapropria: {/* ok */
        type: Sequelize.BOOLEAN,
        allowNull: false
      },
      tempoDeMoradia: {/* ok */
        type: Sequelize.STRING,
        allowNull: false
      },
      possuiFacebook: {/* ok */
        type: Sequelize.BOOLEAN,
        allowNull: false
      },
      possuiInstagram: {/* ok */
        type: Sequelize.BOOLEAN,
        allowNull: false
      },
      possuiLinkedin: {/* ok */
        type: Sequelize.BOOLEAN,
        allowNull: false
      },
      possuiTwitter: {/* ok */
        type: Sequelize.BOOLEAN,
        allowNull: false
      },
      possuiTelFixo: {/* ok */
        type: Sequelize.BOOLEAN,
        allowNull: false
      },
      isWhatsapp: {/* ok */
        type: Sequelize.BOOLEAN,
        allowNull: false
      },
      candFacebook: {/* ok */
        type: Sequelize.STRING,
        allowNull: true
      },
      candInstagram: {/* ok */
        type: Sequelize.STRING,
        allowNull: true
      },
      candLinkedin: {/* ok */
        type: Sequelize.STRING,
        allowNull: true
      },
      candTwitter: {/* ok */
        type: Sequelize.STRING,
        allowNull: true
      },
      telefoneFixo: {/* ok */
        type: Sequelize.STRING,
        allowNull: true
      },
      candEmail: {/* ok */
        type: Sequelize.STRING,
        allowNull: false
      },
      ensinoComplementar: {/* ok */
        type: Sequelize.BOOLEAN,
        allowNull: false
      },
      ensinoFundamental: {/* ok */
        type: Sequelize.BOOLEAN,
        allowNull: false
      },
      ensinoMedio: {/* ok */
        type: Sequelize.BOOLEAN,
        allowNull: false
      },
      possuiWord: {/* ok */
        type: Sequelize.BOOLEAN,
        allowNull: false
      },
      possuiExcel: {/* ok */
        type: Sequelize.BOOLEAN,
        allowNull: false
      },
      possuiVendasOnline: {/* ok */
        type: Sequelize.BOOLEAN,
        allowNull: false
      },
      possuiDigitacao: {/* ok */
        type: Sequelize.BOOLEAN,
        allowNull: false
      },
      comoSoube: {/* ok */
        type: Sequelize.STRING,
        allowNull: false
      },
      nomeFuncionario: {/* ok */
        type: Sequelize.STRING,
        allowNull: true
      },
      motivoDaVaga: {/* ok */
        type: Sequelize.STRING,
        allowNull: false
      },
      possuiExperiencias: {/* ok */
        type: Sequelize.BOOLEAN,
        allowNull: false
      },
      pretencaoSalarial: {/* ok */
        type: Sequelize.INTEGER,
        allowNull: false
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
    await queryInterface.dropTable('autocand_candidatos');

  }
};
