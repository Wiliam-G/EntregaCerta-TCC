const DestinatarioRecebedor = require("../models/DestinatarioRecebedor");
const Usuario = require("../models/Usuario");

module.exports = {
  async criar(req, res) {
    const { idRecebedor, idDestinatario } = req.body;

    const destinatariosRecebedores = await DestinatarioRecebedor.create({
      idRecebedor,
      idDestinatario,
    })
      .then((destinatariosRecebedores) => {
        console.log(destinatariosRecebedores);
        return res.json(destinatariosRecebedores);
      })
      .catch((err) => console.log(err));
    return destinatariosRecebedores;
  },

  // async getRecebedores(req, res) {
  //   const { id } = req.params;

  //   const recebedores = await .findByPk(id, {
  //     include: { association: "avaliacoes" },
  //   });

  //   return res.json(encomenda);

  // async getRecebedores(req, res) {
  //   const { id } = req.params;
  //   const recebedores = await DestinatarioRecebedor.findByPk(id, {
  //     include: { model: Usuario, as: "usuarioRecebedor" },
  //   });

  //   return res.json(recebedores);
  // },

  async getRecebedores(req, res) {
    const { idDestinatario } = req.params;

    const destinatarioRecebedores = await DestinatarioRecebedor.findAll({
      where: { idDestinatario },
      include: { model: Usuario, as: "recebedor" },
    });

    const recebedores = destinatarioRecebedores.map(
      (destinatarioRecebedor) => destinatarioRecebedor.recebedor
    );

    return res.json(recebedores);
  },

  async addRecebedor(req, res) {
    const { idDestinatario, codigoRecebedor } = req.body;

    const recebedor = await Usuario.findOne({
      where: { codigo: codigoRecebedor },
    });

    if (recebedor == null) {
      return res
        .status(404)
        .json({ erro: "Código inválido, tente novamente!" });
    }

    const destinatarioRecebedor = await DestinatarioRecebedor.findOne({
      where: { idDestinatario, idRecebedor: recebedor.id },
    });

    if (destinatarioRecebedor != null) {
      return res.status(400).json({
        message: `${recebedor.nome} já está cadastrado como seu recebedor.`,
        typeError: "RecebedorExistente",
      });
    }

    const destinatariosRecebedores = await DestinatarioRecebedor.create({
      idDestinatario: idDestinatario,
      idRecebedor: recebedor.id,
    })
      .then((destinatariosRecebedores) => {
        console.log(destinatariosRecebedores);
        return res.json(destinatariosRecebedores);
      })
      .catch((err) => console.log(err));
    return destinatariosRecebedores;
  },

  async deleteRecebedor(req, res) {
    const { idRecebedor, idDestinatario } = req.params;

    const destinatarioRecebedor = await DestinatarioRecebedor.findOne({
      where: { idDestinatario: idDestinatario, idRecebedor: idRecebedor },
    });

    if (destinatarioRecebedor == null) {
      return res.status(404).json({ erro: "Não encontrado" });
    }

    const k = await destinatarioRecebedor.destroy();

    return res.json();

    // return res.status(200);

    // const deleteDestinatarioRecebedor = await DestinatarioRecebedor.destroy({
    //   where: { idDestinatario: idDestinatario, idRecebedor },
    // })
    //   .then((res) => {
    //     return res;
    //   })
    //   .catch((err) => console.log(err));
  },
};
