// Importando o modelo de endereços
const Encomenda = require("../models/Encomenda");
const Funcionario = require("../models/Funcionario");
const Endereco = require("../models/Endereco");
const Avaliacao = require("../models/Avaliacao");
const Usuario = require("../models/Usuario");
const Empresa = require("../models/Empresa");
const DestinatarioRecebedor = require("../models/DestinatarioRecebedor");
const { Op } = require("sequelize");

module.exports = {
  async criar(req, res) {
    // let { id } = req.params;
    const {
      dataEntregaPrevista,
      idEmpresa,
      dataEnvio,
      idDestinatario,
      idRecebedor,
      codigoEncomenda,
      dataRecebimento,
    } = req.body;

    const endereco = await Endereco.findOne({
      where: { idUsuario: idDestinatario },
    });

    if (endereco == null) {
      return res
        .status(400)
        .json({ erro: "Não há um endereço cadastrado para este usuário!" });
    }

    const encomenda = await Encomenda.create({
      dataEntregaPrevista,
      idEmpresa,
      dataEnvio,
      idDestinatario,
      idRecebedor,
      codigoEncomenda,
      dataRecebimento,
      idEndereco: endereco.id,
    })
      .then((encomendaCriada) => {
        console.log(encomendaCriada);
        return encomendaCriada;
      })
      .catch((err) => console.log(err));

    return res.json(encomenda);
  },

  async listar(req, res) {
    const { id } = req.params;

    const funcionario = await Funcionario.findByPk(id, {
      include: { association: "encomendas" },
    });

    return res.json(funcionario);
  },

  async getAvaliacoes(req, res) {
    const { id } = req.params;

    const encomenda = await Encomenda.findByPk(id, {
      include: { association: "avaliacoes" },
    });

    return res.json(encomenda);

    // ---- retorna todas as encomendas e suas respectivas avaliacoes ------
    // const encomendas = await Encomenda.findAll({
    //   include: { model: Avaliacao, as: 'avaliacoes'}
    // });

    // return res.json(encomendas);
  },

  async getEncomendasAtivas(req, res) {
    const { idDestinatario } = req.params;

    let ids = await getRecebedoresId(idDestinatario);

    const encomendas = await Encomenda.findAll({
      where: {
        idDestinatario: {
          [Op.in]: ids,
        },
        dataRecebimento: null,
      },
      include: { all: true },
    });

    return res.json(encomendas);
  },

  async getEncomendasRecebidas(req, res) {
    const { idDestinatario } = req.params;

    let ids = await getRecebedoresId(idDestinatario);

    const encomendas = await Encomenda.findAll({
      where: {
        idDestinatario: {
          [Op.in]: ids,
        },
        dataRecebimento: { [Op.not]: null },
      },
      include: { all: true },
    });

    return res.json(encomendas);
  },

  async getEncomendasByCodigoRecebedorEmpresa(req, res) {
    const { codigoRecebedor, idEmpresa } = req.params;

    console.log(codigoRecebedor);

    getRecebedoresId;

    const { id } = await Usuario.findOne({
      attributes: ["id"],
      raw: true,
      where: { codigo: codigoRecebedor },
    });

    if (id == null) {
      return res.status(404).json();
    }

    let ids = await getRecebedoresId(id);

    const encomendas = await Encomenda.findAll({
      where: {
        idDestinatario: {
          [Op.in]: ids,
        },
        idEmpresa,
        dataRecebimento: null,
      },
      include: { all: true },
    });

    const obj = { idRecebedor: id, encomendas: encomendas };

    return res.json(obj);
  },

  async approveDelivery(req, res) {
    const { id } = req.params;

    const { idFuncionario, codigoRecebedor } = req.body;

    const recebedor = await Usuario.findOne({
      where: { codigo: codigoRecebedor },
    });

    const encomenda = await Encomenda.findOne({
      where: { id, dataRecebimento: null },
    });

    if (encomenda == null) {
      return res
        .status(400)
        .json({ erro: "Nenhuma encomenda a ser entregue encontrada" });
    }

    encomenda.idFuncionario = idFuncionario;
    encomenda.idRecebedor = recebedor.id;
    encomenda.dataRecebimento = new Date();

    encomenda.reload();
    encomenda.save();

    await Avaliacao.create({
      idEncomenda: encomenda.id,
      idUsuario: encomenda.idDestinatario,
      avaliado: false,
      tipo: Avaliacao.tipoEncomenda(),
    });

    await Avaliacao.create({
      idEncomenda: encomenda.id,
      idUsuario: recebedor.id,
      avaliado: false,
      tipo: Avaliacao.tipoRecebimento(),
    });

    return res.status(200).json(recebedor.nome);
  },
  async getEncomendaByCodigo(req, res) {
    const { codigoEncomenda } = req.params;

    const encomenda = await Encomenda.findOne({
      where: { codigoEncomenda, dataRecebimento: null },
      include: { all: true },
    });

    if (encomenda == null) {
      return res
        .status(400)
        .json({ erro: "Nenhuma encomenda a ser entregue encontrada" });
    }

    return res.json(encomenda);
  },
  // async approveDelivery(req, res) {
  //   const { id } = req.params;

  //   const { idFuncionario, idRecebedor } = req.body;

  //   const encomenda = await Encomenda.findByPk(id);

  //   encomenda.idFuncionario = idFuncionario;
  //   encomenda.idRecebedor = idRecebedor;
  //   encomenda.dataRecebimento = new Date();

  //   encomenda.reload();
  //   encomenda.save();

  //   await Avaliacao.create({
  //     idEncomenda: encomenda.id,
  //     idUsuario: encomenda.idDestinatario,
  //     avaliado: false,
  //     tipo: Avaliacao.tipoEncomenda(),
  //   });

  //   await Avaliacao.create({
  //     idEncomenda: encomenda.id,
  //     idUsuario: idRecebedor,
  //     avaliado: false,
  //     tipo: Avaliacao.tipoRecebimento(),
  //   });

  //   return res.status(200).json();
  // },
  // async getEncomendaByCodigo(req, res) {
  //   const { codigoEncomenda } = req.params;

  //   const encomenda = await Encomenda.findOne({
  //     where: { codigoEncomenda },
  //     include: { all: true },
  //   });

  //   return res.json(encomenda);
  // },
};

async function getRecebedoresId(idDestinatario) {
  let ids = [idDestinatario];

  const idsObj = await DestinatarioRecebedor.findAll({
    attributes: ["idDestinatario"],
    raw: true,
    where: { idRecebedor: idDestinatario },
  });

  ids = ids.concat(
    idsObj.map((obj) => {
      return obj.idDestinatario.toString();
    })
  );

  return ids;
}
