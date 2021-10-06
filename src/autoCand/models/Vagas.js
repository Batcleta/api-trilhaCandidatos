const { Model, DataTypes } = require('sequelize')

class autocand_vagas extends Model {
    static init(sequelize) {
        super.init({
            id: { type: DataTypes.INTEGER, primaryKey: true },
            vagaEmpresa: { type: DataTypes.STRING, allowNull: false },
            nomeVaga: { type: DataTypes.STRING, allowNull: false },
            vagaDataLimite: { type: DataTypes.DATE, allowNull: false },
            vagaDescr: { type: DataTypes.STRING, allowNull: false },
            reqIdade: { type: DataTypes.BOOLEAN, allowNull: false },
            minIdade: { type: DataTypes.STRING, allowNull: true },
            maxIdade: { type: DataTypes.STRING, allowNull: true },
            reqExp: { type: DataTypes.BOOLEAN, allowNull: false },
            reqExpAnos: { type: DataTypes.STRING, allowNull: true },
            residProximo: { type: DataTypes.BOOLEAN, allowNull: false },
            regContrato: { type: DataTypes.STRING, allowNull: false },
            vagaPeriodo: { type: DataTypes.STRING, allowNull: true },
            faixaSalarial: { type: DataTypes.BOOLEAN, allowNull: false },
            faixaSalarialInicial: { type: DataTypes.STRING, allowNull: true },
            faixaSalarialfinal: { type: DataTypes.STRING, allowNull: true },
            reqCapacita: { type: DataTypes.BOOLEAN, allowNull: false },
            capacitaCurso: { type: DataTypes.STRING, allowNull: true },
        }, {
            sequelize
        })
    }
    static associate(models) {
        this.belongsToMany(models.autocand_candidatos, {
            foreignKey: 'vaga_id',
            through: 'autocand_candidato_vaga',
            as: 'candidatos'
        })
    }
}

module.exports = autocand_vagas