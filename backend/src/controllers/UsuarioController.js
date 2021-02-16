// Importando o modelo de usuario
const Usuario = require("../models/Usuario");
const Endereco = require("../models/Endereco");
const DestinatarioRecebedor = require("../models/DestinatarioRecebedor");
const Encomenda = require("../models/Encomenda");

module.exports = {
  async criar(req, res) {
    let { id } = req.params;
    const { nome, telefone } = req.body;

    // Verificando se existe um endereço para associar ao usuário
    // const endereco = await Endereco.findOne(
    //     { attributes: ['idEndereco'] },
    //     { where: { idEndereco: idEndereco } })
    //     .then(item => console.log(item))
    //     .catch(err => console.log(err));
    // id = Number(id);
    // const endereco = await Endereco.findByPk(id)

    // console.log(endereco);
    // // Caso não encontre um endereço com o id buscado, retorna um erro
    // if(!endereco) {
    //     return res.status(400).json({ erro: 'Endereço não encontrado!' });
    // }
    const codigo = gerarCodigo();

    const usuario = await Usuario.create({ nome, telefone, codigo })
      .then((usuarioCriado) => {
        console.log(usuarioCriado);
        return usuarioCriado;
      })
      .catch((err) => console.log(err));

    return res.json(usuario);
  },

  async listar(req, res) {
    const { id } = req.params;

    const endereco = await Endereco.findByPk(id, {
      include: { association: "usuarios" },
    });

    return res.json(endereco);
  },

  async getDadosPessoais(req, res) {
    const { id } = req.params;

    const usuario = await Usuario.findByPk(id, {
      include: { association: "enderecos" },
    });

    return res.json(usuario);
  },

  async getUsuario(req, res) {
    const usuario =  await Usuario.findOne();

    return res.json(usuario)
  },

  // async getDadosPessoais(req, res) {
  //   const { id } = req.params;

  //   const usuario = await Usuario.findByPk(id, {
  //     include: { association: "enderecos" },
  //   });

  //   return res.json(usuario);
  // },

  async updateUsuario(req, res) {
    const updatedUsuario = req.body;
    const { id } = req.params;

    let oldUsuario = await Usuario.findByPk(id);

    // oldEnderecos.forEach(endereco => {
    //   end1 = updatedUsuario.enderecos.filter(end => {
    //     return end.id == endereco.id;
    //   });

    //   endereco.nome
    // });

    oldUsuario.nome = updatedUsuario.nome;
    oldUsuario.telefone = updatedUsuario.telefone;
    oldUsuario.enderecos = updatedUsuario.enderecos;

    // oldEndereco.rua;

    // oldEndereco.idUsuario = updatedEndereco.idUsuario;
    // oldEndereco.rua = updatedEndereco.rua;
    // oldEndereco.numero = updatedEndereco.numero;
    // oldEndereco.cidade = updatedEndereco.cidade;
    // oldEndereco.bairro = updatedEndereco.bairro;
    // oldEndereco.estado = updatedEndereco.estado;
    // oldEndereco.cep = updatedEndereco.cep;
    // oldEndereco.staticImageMapUrl = updatedEndereco.staticImageMapUrl;
    // oldEndereco.lat = updatedEndereco.lat;
    // oldEndereco.lng = updatedEndereco.lng;
    // oldEndereco.ativo = updatedEndereco.ativo;

    await oldUsuario.save();

    return res.json(oldUsuario);
  },

  async updateCodigoUsuario(req, res) {
    const { id } = req.params;

    const usuario = await Usuario.findByPk(id);

    usuario.codigo = gerarCodigo();

    usuario.reload();
    usuario.save();

    return res.status(200).json(usuario.codigo);
  },
};

function gerarCodigo(tamanho = 30) {
  let resultado = "";
  let characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let charactersLength = characters.length;
  for (var i = 0; i < tamanho; i++) {
    resultado += characters.charAt(
      Math.floor(Math.random() * charactersLength)
    );
  }
  return resultado;
}
