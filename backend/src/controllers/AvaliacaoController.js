const Avaliacao = require("../models/Avaliacao");
const Encomenda = require("../models/Encomenda");
const { listar } = require("./UsuarioController");

module.exports = {
  async criar(req, res) {
    const { idEncomenda, nota, descricao, dataAvaliacao } = req.body;

    const avaliacoes = await Avaliacao.create({
      nota,
      descricao,
      dataAvaliacao,
      idEncomenda,
    })
      .then((avaliacao) => {
        console.log(avaliacao);
        return res.json(avaliacao);
      })
      .catch((err) => console.log(err));
    return avaliacoes;
  },

  async getAvaliacoes(req, res) {
    const { idEncomenda, idUsuario } = req.params;

    const avaliacoes = await Avaliacao.findAll({
      where: { idEncomenda, idUsuario, avaliado: false },
    });

    return res.json(avaliacoes);
  },

  async updateAvaliacao(req, res) {
    const { id } = req.params;

    const avaliacao = req.body;

    const oldAvaliacao = await Avaliacao.findByPk(id);

    oldAvaliacao.nota = avaliacao.nota;
    oldAvaliacao.descricao = avaliacao.descricao;
    oldAvaliacao.dataAvaliacao = new Date();
    oldAvaliacao.avaliado = true;

    oldAvaliacao.reload();
    oldAvaliacao.save();

    return res.status(200).json();
  },
};
