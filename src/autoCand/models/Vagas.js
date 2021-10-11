const { Model, DataTypes } = require("sequelize");

class autocand_vagas extends Model {
  static init(sequelize) {
    super.init(
      {
        id: { type: DataTypes.INTEGER, primaryKey: true },
        NomeDaEmpresa: { type: DataTypes.STRING, allowNull: false },
        NomeDaVaga: { type: DataTypes.STRING, allowNull: false },
        dataLimiteParaCadastro: { type: DataTypes.DATE, allowNull: true }, // Date or null
        // Descrição da vaga
        descricaoDaVaga: { type: DataTypes.STRING, allowNull: false },
        regimeDeContrato: { type: DataTypes.STRING, allowNull: false },
        jornadaDaVaga: { type: DataTypes.STRING, allowNull: false },
        // Requerimentos da vaga
        requerExperiencia: { type: DataTypes.STRING, allowNull: true }, // exp time or null
        requerCapacitacao: { type: DataTypes.STRING, allowNull: true }, // cap or null
        minIdade: { type: DataTypes.INTEGER, allowNull: true }, // number or null
        maxIdade: { type: DataTypes.INTEGER, allowNull: true }, // number or null
        residProximo: { type: DataTypes.BOOLEAN, allowNull: false }, // true or false
        requerCNH: { type: DataTypes.STRING, allowNull: true }, // CNH type or null
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
      },
      {
        sequelize,
      }
    );
  }
  static associate(models) {
    this.belongsToMany(models.autocand_candidatos, {
      foreignKey: "vaga_id",
      through: "autocand_candidato_vaga",
      as: "candidatos",
    });
  }
}

module.exports = autocand_vagas;
