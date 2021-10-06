const Candidato = require('../models/Candidatos')
const Capacitacao = require('../models/Capacitacao')



module.exports = {

    async index(req, res) {

    },

    async store(req, res) {

        const { candidato_id } = req.params
        const capacita = [...req.body]

        const user = await Candidato.findByPk(candidato_id)
        if (!user) { res.status(400).json({ error: 'User not found' }) }

        capacita.forEach(element => {
            Capacitacao.create({ ...element, candidato_id })
        })

        return res.json(capacita)
    },

    async delete(req, res) {

    }
}