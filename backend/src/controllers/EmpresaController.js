// Importando o modelo de endereços
const Empresa = require("../models/Empresa");

module.exports = {
  async criar(req, res) {
    const { nomeEmpresa } = req.body;
    const empresa = await Empresa.create(
      { nomeEmpresa },
      { fields: ["nomeEmpresa"] }
    )
      .then((empresaCriada) => {
        console.log(empresaCriada);
        return res.json(empresaCriada);
      })
      .catch((err) => console.log(err));

    return empresa;
  },
};
