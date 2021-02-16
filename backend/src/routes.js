// Importando o framework express
const express = require("express");
// Importando as rotas
const routes = express.Router();

// Importando os controllers
const EnderecoController = require("./controllers/EnderecoController");
const UsuarioController = require("./controllers/UsuarioController");
const EmpresaController = require("./controllers/EmpresaController");
const FuncionarioController = require("./controllers/FuncionarioController");
const EncomendaController = require("./controllers/EncomendaController");
const AvaliacaoController = require("./controllers/AvaliacaoController");
const DestinatarioRecebedorController = require("./controllers/DestinatarioRecebedorController");

// ----- DEFININDO ROTAS -----

// Rota para criação de endereços
// Rota para criação de usuários
routes.post("/usuarios", UsuarioController.criar);
// Rota para criação de empresas
routes.post("/empresas", EmpresaController.criar);
// Rota para criação de funcionários
routes.post("/funcionarios", FuncionarioController.criar);
// Rota para criação de encomendas

// rota para a criação de avaliações
routes.post("/avaliacoes", AvaliacaoController.criar);
// rota para a criação de destinatarios ou recebedores
routes.post("/destinatariosrecebedores", DestinatarioRecebedorController.criar);

// // Rota para a criação de um usuário associado a um endereço
// // routes.post('/enderecos/:id/usuarios', UsuarioController.criar);
// // Rota para a criação de um funcionário associado a uma empresa
// routes.post('/empresas/:id/funcionarios', FuncionarioController.criar);
// // Rota para a criação de uma encomenda associada a um funcionário
// routes.post('/funcionarios/:id/encomendas', EncomendaController.criar);
// // Rota para criaão de uma avaliacao associada a uma encomenda
// routes.post('/avaliacoes/:id/encomendas', AvaliacaoController.criar);

// Rotas APP

// GET
routes.get(
  "/recebedores/:idDestinatario",
  DestinatarioRecebedorController.getRecebedores
);
// routes.get("/encomendas/:id", EncomendaController.getAvaliacoes);
routes.get("/encomendas/destinatario/:idDestinatario/ativas", EncomendaController.getEncomendasAtivas);
routes.get("/encomendas/destinatario/:idDestinatario/recebidas", EncomendaController.getEncomendasRecebidas);
routes.get("/encomendas/:codigoEncomenda", EncomendaController.getEncomendaByCodigo);
routes.get("/encomendas/recebedor/:codigoRecebedor/empresa/:idEmpresa", EncomendaController.getEncomendasByCodigoRecebedorEmpresa);
routes.get("/usuarios/:id", UsuarioController.getDadosPessoais);
routes.get("/enderecos/:idUsuario", EnderecoController.getEncomendas);
routes.get("/avaliacoes/encomenda/:idEncomenda/usuario/:idUsuario", AvaliacaoController.getAvaliacoes);
routes.get("/usuarios", UsuarioController.getUsuario);

// POST
routes.post("/recebedores", DestinatarioRecebedorController.addRecebedor);
routes.post("/enderecos", EnderecoController.addEndereco);
routes.post("/encomendas", EncomendaController.criar);

// PUT
routes.put("/usuarios/:id", UsuarioController.updateUsuario);
routes.put("/enderecos/:id", EnderecoController.ativarEndereco);
routes.put("/encomendas/:id", EncomendaController.approveDelivery);
routes.put("/avaliacoes/:id", AvaliacaoController.updateAvaliacao);
routes.put("/usuarios/:id/codigo", UsuarioController.updateCodigoUsuario);

// DELETE
routes.delete(
  "/recebedores/:idRecebedor/destinatario/:idDestinatario",
  DestinatarioRecebedorController.deleteRecebedor
);
routes.delete("/enderecos/:id", EnderecoController.deleteEndereco);

module.exports = routes;
