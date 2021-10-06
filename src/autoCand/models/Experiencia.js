const { Model, DataTypes } = require('sequelize')

class autocand_experiencias extends Model {
    static init(sequelize) {
        super.init({
            id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
            nomeEmpresa: { type: DataTypes.STRING, allowNull: false },
            nomeCargo: { type: DataTypes.STRING, allowNull: false },
            UltimoSalario: { type: DataTypes.STRING, allowNull: false },
            dataEntrada: { type: DataTypes.DATE, allowNull: false },
            dataSaida: { type: DataTypes.DATE, allowNull: false },
            motivoSaida: { type: DataTypes.STRING, allowNull: false },

            possuiBeneficio: { type: DataTypes.BOOLEAN, allowNull: false },
            tipoBeneficio: { type: DataTypes.STRING, allowNull: true },
            valorBeneficio: { type: DataTypes.STRING, allowNull: true },

            possuiBonus: { type: DataTypes.BOOLEAN, allowNull: false },
            tipoBonus: { type: DataTypes.STRING, allowNull: true },
            valorBonus: { type: DataTypes.STRING, allowNull: true },

            possuiComissao: { type: DataTypes.BOOLEAN, allowNull: false },
            tipoComissao: { type: DataTypes.STRING, allowNull: true },
            valorComissao: { type: DataTypes.STRING, allowNull: true },

            telefoneEmpresa: { type: DataTypes.BOOLEAN, allowNull: false },
            ufEmpresa: { type: DataTypes.BOOLEAN, allowNull: false },
            cidadeEmpresa: { type: DataTypes.BOOLEAN, allowNull: false },
            createdAt: { type: DataTypes.DATE, allowNull: false },
            updatedAt: { type: DataTypes.DATE, allowNull: false }
        }, {
            sequelize
        })
    }
    static associate(models) {
        this.belongsTo(models.autocand_candidatos, {
            foreignKey: 'candidato_id',
            as: 'candidato'
        })
    }
}

module.exports = autocand_experiencias