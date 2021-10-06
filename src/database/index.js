const sequelize = require('sequelize')
const dbCofig = require('../config/database')

const Vagas = require('../autoCand/models/Vagas')
const Candidatos = require('../autoCand/models/Candidatos')
const Capacitacao = require('../autoCand/models/Capacitacao')
const Experiencia = require('../autoCand/models/Experiencia')
const connection = new sequelize(dbCofig)

Vagas.init(connection)
Candidatos.init(connection)
Capacitacao.init(connection)
Experiencia.init(connection)

Vagas.associate(connection.models)
Candidatos.associate(connection.models)
Capacitacao.associate(connection.models)
Experiencia.associate(connection.models)

module.exports = connection