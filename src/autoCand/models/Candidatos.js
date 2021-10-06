const { Model, DataTypes } = require('sequelize')

class autocand_candidatos extends Model {
    static init(sequelize) {
        super.init({
            id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
            cpfCandidato: { type: DataTypes.STRING, allowNull: false },
            possuiPis: { type: DataTypes.BOOLEAN, allowNull: false },
            possuiTitulo: { type: DataTypes.BOOLEAN, allowNull: false },
            possuiDispensa: { type: DataTypes.BOOLEAN, allowNull: false },
            possuiCnh: { type: DataTypes.BOOLEAN, allowNull: false },
            categoriaCnh: { type: DataTypes.STRING, allowNull: false },
            validadeCnh: { type: DataTypes.DATE, allowNull: false },

            nomeCandidato: { type: DataTypes.STRING, allowNull: false },
            sobrenomeCandidato: { type: DataTypes.BOOLEAN, allowNull: false },
            dataNascimento: { type: DataTypes.DATE, allowNull: false },
            sexoCandidato: { type: DataTypes.STRING, allowNull: false },
            idadeCandidato: { type: DataTypes.INTEGER, allowNull: false },
            religiaoCandidato: { type: DataTypes.STRING, allowNull: true },
            estadoCivil: { type: DataTypes.BOOLEAN, allowNull: false },

            fumante: { type: DataTypes.BOOLEAN, allowNull: false },
            naturaCandidato: { type: DataTypes.STRING, allowNull: false },
            possuiFilhos: { type: DataTypes.BOOLEAN, allowNull: false },
            quantosFilhos: { type: DataTypes.STRING, allowNull: true },
            idadeDosFilhos: { type: DataTypes.STRING, allowNull: true },
            possuiCuidador: { type: DataTypes.BOOLEAN, allowNull: true },

            cepCandidato: { type: DataTypes.STRING, allowNull: false },
            logradouroCandidato: { type: DataTypes.STRING, allowNull: false },
            numeroEndereco: { type: DataTypes.STRING, allowNull: false },
            complementoEndereco: { type: DataTypes.STRING, allowNull: true },
            bairroCandidato: { type: DataTypes.STRING, allowNull: false },
            municipioCandidato: { type: DataTypes.STRING, allowNull: false },
            ufCandidato: { type: DataTypes.STRING, allowNull: false },
            residenciapropria: { type: DataTypes.BOOLEAN, allowNull: false },
            tempoDeMoradia: { type: DataTypes.STRING, allowNull: false },

            possuiFacebook: { type: DataTypes.BOOLEAN, allowNull: false },
            possuiInstagram: { type: DataTypes.BOOLEAN, allowNull: false },
            possuiLinkedin: { type: DataTypes.BOOLEAN, allowNull: false },
            possuiTwitter: { type: DataTypes.BOOLEAN, allowNull: false },
            possuiTelFixo: { type: DataTypes.BOOLEAN, allowNull: false },
            isWhatsapp: { type: DataTypes.BOOLEAN, allowNull: false },
            candFacebook: { type: DataTypes.STRING, allowNull: true },
            candInstagram: { type: DataTypes.STRING, allowNull: true },
            candLinkedin: { type: DataTypes.STRING, allowNull: true },
            candTwitter: { type: DataTypes.STRING, allowNull: true },
            telefoneFixo: { type: DataTypes.STRING, allowNull: true },
            candEmail: { type: DataTypes.STRING, allowNull: false },

            ensinoComplementar: { type: DataTypes.BOOLEAN, allowNull: false },
            ensinoFundamental: { type: DataTypes.BOOLEAN, allowNull: false },
            ensinoMedio: { type: DataTypes.BOOLEAN, allowNull: false },
            possuiWord: { type: DataTypes.BOOLEAN, llowNull: false },
            possuiExcel: { type: DataTypes.BOOLEAN, allowNull: false },
            possuiVendasOnline: { type: DataTypes.BOOLEAN, allowNull: false },
            possuiDigitacao: { type: DataTypes.BOOLEAN, allowNull: false },

            comoSoube: { type: DataTypes.STRING, allowNull: false },
            nomeFuncionario: { type: DataTypes.STRING, allowNull: true },

            motivoDaVaga: { type: DataTypes.STRING, allowNull: false },
            possuiExperiencias: { type: DataTypes.BOOLEAN, allowNull: false },
            pretencaoSalarial: { type: DataTypes.INTEGER, allowNull: false },
        }, {
            sequelize
        })
    }

    static associate(models) {
        this.belongsToMany(models.autocand_vagas, {
            foreignKey: 'candidato_id',
            through: 'autocand_candidato_vaga',
            as: 'vagas'
        })

        this.hasMany(models.autocand_capacitacao, {
            foreignKey: 'candidato_id',
            as: 'capacitacoes'
        })

        this.hasMany(models.autocand_experiencias, {
            foreignKey: 'candidato_id',
            as: 'experiencias'
        })
    }
}

module.exports = autocand_candidatos