"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable("enderecos", {
      id: {
        type: Sequelize.DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      }, //adicionei as colunas lat, lng e staticImageMapUrl
      cidade: { type: Sequelize.STRING, allowNull: false },
      rua: { type: Sequelize.STRING, allowNull: false },
      numero: { type: Sequelize.INTEGER, allowNull: false },
      cep: { type: Sequelize.STRING, allowNull: false },
      bairro: { type: Sequelize.STRING, allowNull: false },
      estado: { type: Sequelize.STRING, allowNull: false },
      ativo: { type: Sequelize.INTEGER, allowNull: false },
      lat: { type: Sequelize.DECIMAL(10, 8), allowNull: false },
      lng: { type: Sequelize.DECIMAL(11, 8), allowNull: false },
      staticImageMapUrl: { type: Sequelize.STRING(500), allowNull: false },
      idUsuario: {
        type: Sequelize.INTEGER,
        references: { model: "usuarios", key: "id" },
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
      },
    });
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.dropTable("enderecos");
  },
};
