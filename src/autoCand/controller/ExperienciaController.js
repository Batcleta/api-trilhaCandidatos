const Candidato = require("../models/Candidatos");
const Exp = require("../models/Experiencia");

module.exports = {
  async index(req, res) {},

  async store(req, res) {
    const { candidato_id } = req.params;
    const data = [...req.body];

    const user = await Candidato.findByPk(candidato_id);
    if (!user) {
      res.status(400).json({ error: "User not found" });
    }

    data.forEach(async (element) => {
      await Exp.create({ ...element, candidato_id });
      return res.send();
    });
  },

  async delete(req, res) {},
};
