// Importando o modelo de endereços
const Funcionario = require("../models/Funcionario");
const Empresa = require("../models/Empresa");
const { listar } = require("./UsuarioController");

module.exports = {
  async criar(req, res) {
    const { nome, idEmpresa } = req.body;

    // id = Number(id);

    // const empresa = await Empresa.findByPk(id);

    // if(!empresa) {
    //     return res.status(400).json({ erro: 'Empresa não encontrada!' })
    // }

    const funcionario = await Funcionario.create(
      { nome, idEmpresa },
      { fields: ["nome", "idEmpresa"] }
    )
      .then((funcionarioCriado) => {
        console.log(funcionarioCriado);
        return funcionarioCriado;
      })
      .catch((err) => console.log(err));

    return res.json(funcionario);
  },

  async listar(req, res) {
    const { id } = req.params;

    const empresa = await Empresa.findByPk(id, {
      include: { association: "funcionarios" },
    });

    return res.json(empresa);
  },
};
