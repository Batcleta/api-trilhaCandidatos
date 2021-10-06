const Op = require("sequelize").Op;
const Vaga = require("../models/Vagas");

module.exports = {
  async index(req, res) {
    const { page } = req.query;
    const pageSize = 12;
    const { pesquisa } = req.query;

    let condition = pesquisa
      ? { nomeVaga: { [Op.like]: `%${pesquisa}%` } }
      : null;

    const getPagination = (page, size) => {
      const limit = size ? +size : 10;
      const offset = page ? page * limit : 0;
      return { limit, offset };
    };

    const { limit, offset } = getPagination(page, pageSize);

    const getPagingData = (data, page, limit) => {
      const { count: totalItems, rows: clients } = data;
      const currentPage = page ? +page : 0;
      const totalPages = Math.ceil(totalItems / limit);
      return { totalItems, clients, totalPages, currentPage };
    };

    Vaga.findAndCountAll({
      limit,
      offset,
      where: condition,
    })
      .then((data) => {
        const response = getPagingData(data, page, limit);
        res.send(response);
      })
      .catch((err) =>
        res.status(500).send({
          message: err.message || "Error",
        })
      );
  },

  async store(req, res) {
    Vaga.create({ ...req.body })
      .then((data) => {
        res.send(data);
      })
      .catch((err) =>
        res.status(500).send({
          message: err.message || "error",
        })
      );
  },

  async delete(req, res) {
    const { id } = req.params;

    Vaga.destroy({
      where: {
        id: id,
      },
    })
      .then((data) => {
        res.send(data);
      })
      .catch((err) =>
        res.status(500).send({
          message: err.message || "error",
        })
      );
  },
};
