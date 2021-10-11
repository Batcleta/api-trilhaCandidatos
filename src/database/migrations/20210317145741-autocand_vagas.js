"use strict";

module.exports = {
  up: async (queryInterface, DataTypes) => {
    await queryInterface.createTable("autocand_vagas", {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      NomeDaEmpresa: { type: DataTypes.STRING, allowNull: false },
      NomeDaVaga: { type: DataTypes.STRING, allowNull: false },
      dataLimiteParaCadastro: { type: DataTypes.DATE, allowNull: true },
      // Descrição da vaga
      descricaoDaVaga: { type: DataTypes.STRING, allowNull: false },
      regimeDeContrato: { type: DataTypes.STRING, allowNull: false },
      jornadaDaVaga: { type: DataTypes.STRING, allowNull: false },
      // Requerimentos da vaga
      requerExperiencia: { type: DataTypes.STRING, allowNull: true },
      requerCapacitacao: { type: DataTypes.STRING, allowNull: true },
      minIdade: { type: DataTypes.INTEGER, allowNull: true },
      maxIdade: { type: DataTypes.INTEGER, allowNull: true },
      residProximo: { type: DataTypes.BOOLEAN, allowNull: false },
      requerCNH: { type: DataTypes.STRING, allowNull: true },
      // Beneficios da vaga
      faixaSalarialInicial: { type: DataTypes.STRING, allowNull: true },
      faixaSalarialfinal: { type: DataTypes.STRING, allowNull: true },
      PossuiValeTransporte: { type: DataTypes.BOOLEAN, allowNull: true },
      possuiValeAlimentacao: { type: DataTypes.BOOLEAN, allowNull: true },
      possuiValeRefeicao: { type: DataTypes.BOOLEAN, allowNull: true },
      possuiPlanoDeSaude: { type: DataTypes.BOOLEAN, allowNull: true },
      possuiDayOffAniversário: { type: DataTypes.BOOLEAN, allowNull: true },
      possuiJornadaFlexivel: { type: DataTypes.BOOLEAN, allowNull: true },
      possuiJornadaHibrida: { type: DataTypes.BOOLEAN, allowNull: true },
      possuiHomeOffice: { type: DataTypes.BOOLEAN, allowNull: true },
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("autocand_vagas");
  },
};
