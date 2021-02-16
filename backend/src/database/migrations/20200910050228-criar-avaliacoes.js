"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable("avaliacoes", {
      id: {
        type: Sequelize.DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      nota: {
        type: Sequelize.INTEGER,
      },
      descricao: { type: Sequelize.STRING },
      dataAvaliacao: { type: Sequelize.DATE },
      idEncomenda: {
        type: Sequelize.INTEGER,
        references: { model: "encomendas", key: "id" },
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
        allowNull: false,
      },
    });
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.dropTable("avaliacoes");
  },
};
