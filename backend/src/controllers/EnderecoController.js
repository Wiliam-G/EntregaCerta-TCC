// Importando o modelo de endereços
const Endereco = require("../models/Endereco");
const { Sequelize } = require("sequelize");

module.exports = {
  async criar(req, res) {
    const {
      cidade,
      rua,
      numero,
      bairro,
      CEP,
      estado,
      ativo,
      lat,
      lng,
      staticImageMapUrl,
      idUsuario,
    } = req.body;
    const enderecoModel = await Endereco.create({
      cidade,
      rua,
      numero,
      bairro,
      CEP,
      estado,
      ativo,
      lat,
      lng,
      staticImageMapUrl,
      idUsuario,
    })
      .then((endereco) => {
        console.log(endereco);
        return endereco;
      })
      .catch((err) => console.log(err));

    return res.json(enderecoModel);
  },

  async getEncomendas(req, res) {
    const { idUsuario } = req.params;

    const enderecos = await Endereco.findAll({
      where: { idUsuario },
      order: [
        ["ativo", "DESC"],
        ["id", "ASC"],
      ],
    });

    return res.json(enderecos);
  },

  async addEndereco(req, res) {
    let endereco = req.body;

    endereco = Endereco.build(endereco);

    await endereco.save().then(() => {
      return res.status(200).json();
    });
  },

  async deleteEndereco(req, res) {
    const { id } = req.params;

    const endereco = await Endereco.findByPk(id);

    await endereco.destroy().then(() => {
      return res.status(200).json();
    });
  },

  async ativarEndereco(req, res) {
    const Op = Sequelize.Op;

    const { id } = req.params;

    await Endereco.update(
      {
        ativo: true,
      },
      { where: { id } }
    );

    await Endereco.update(
      { ativo: false },
      {
        where: {
          id: {
            [Op.not]: id,
          },
        },
      }
    ).then(() => {
      return res.status(200).json();
    });
  },
};
