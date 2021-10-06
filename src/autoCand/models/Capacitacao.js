const { Model, DataTypes } = require('sequelize')

class autocand_capacitacao extends Model {
    static init(sequelize) {
        super.init({
            id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
            tipoDoCurso: { type: DataTypes.STRING, allowNull: false },
            nomeCurso: { type: DataTypes.STRING, allowNull: false },
            instituicaoCurso: { type: DataTypes.STRING, allowNull: false },
            dataInicioCurso: { type: DataTypes.DATE, allowNull: false },
            dataConclusaoCurso: { type: DataTypes.DATE, allowNull: false },
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

module.exports = autocand_capacitacao