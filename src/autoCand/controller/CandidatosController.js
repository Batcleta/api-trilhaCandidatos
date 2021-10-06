const Vaga = require("../models/Vagas");
const Candidato = require("../models/Candidatos");

module.exports = {
  async index(req, res) {},

  async findAll(req, res) {
    Candidato.findAll()
      .then((data) => {
        res.send(data);
      })
      .catch((err) =>
        res.status(500).send({
          message: err.message || "Error",
        })
      );
  },

  async store(req, res) {
    const { vaga_id } = req.params;
    const data = { ...req.body };

    const cpfCandidato = data.cpfCandidato;

    const vagas = await Vaga.findByPk(vaga_id);
    if (!vagas) {
      res.status(400).json({ error: "vagas not found" });
    } else {
      const findCandidato = await Candidato.findAll({
        where: { cpfCandidato },
      });

      if (findCandidato.length !== 0) {
        res
          .status(400)
          .json({ error: "CPF ja cadastrado, cadastre outro cpf porra" });
      } else {
        const candidatos = await Candidato.create(data);
        await vagas.addCandidato(candidatos);
        return res.json(candidatos);
      }
    }
  },

  async delete(req, res) {},
};
