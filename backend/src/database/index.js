// Importando a classe sequelize
const Sequelize = require("sequelize");
// Importando a configuração com o banco de dados
const dbConfig = require("../config/database");

// Importando os modelos
const Usuario = require("../models/Usuario");
const Endereco = require("../models/Endereco");
const Empresa = require("../models/Empresa");
const Funcionario = require("../models/Funcionario");
const Encomenda = require("../models/Encomenda");
const DestinatarioRecebedor = require("../models/DestinatarioRecebedor");
const Avaliacao = require("../models/Avaliacao");

// Importando as configurações de conexão
const connection = new Sequelize(dbConfig);

// Inicializando os modelos
Usuario.init(connection);
Endereco.init(connection);
Empresa.init(connection);
Funcionario.init(connection);
Encomenda.init(connection);
DestinatarioRecebedor.init(connection);
Avaliacao.init(connection);

// Inicializando os relacionamentos
Usuario.associate(connection.models);
Endereco.associate(connection.models);
Funcionario.associate(connection.models);
Empresa.associate(connection.models);
Encomenda.associate(connection.models);
DestinatarioRecebedor.associate(connection.models);
Avaliacao.associate(connection.models);

// Usuario.removeAttribute('id');
// Endereco.removeAttribute('id');

module.exports = connection;
