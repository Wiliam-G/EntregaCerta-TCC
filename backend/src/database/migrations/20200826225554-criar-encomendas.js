"use strict";

const { query } = require("express");

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable("encomendas", {
      id: {
        type: Sequelize.DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      dataEntregaPrevista: { type: Sequelize.DATE },
      dataRecebimento: { type: Sequelize.DATE },
      dataEnvio: { type: Sequelize.DATE },
      codigoEncomenda: { type: Sequelize.STRING, allowNull: false },
      idFuncionario: {
        type: Sequelize.INTEGER,
        references: { model: "funcionarios", key: "id" },
      },
      idEmpresa: {
        type: Sequelize.INTEGER,
        references: { model: "empresas", key: "id" },
        allowNull: false,
      },
      idDestinatario: {
        type: Sequelize.INTEGER,
        references: { model: "usuarios", key: "id" },
        allowNull: false,
      },
      idRecebedor: {
        type: Sequelize.INTEGER,
        references: { model: "usuarios", key: "id" },
      },
      idEndereco: {
        type: Sequelize.INTEGER,
        references: { model: "enderecos", key: "id" },
        allowNull: false,
      },
    });
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.dropTable("encomendas");
  },
};
