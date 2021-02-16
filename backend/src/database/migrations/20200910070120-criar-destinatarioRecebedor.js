"use strict";


module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable("destinatariosRecebedores", {
      id: {
        type: Sequelize.DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      idRecebedor: {
        type: Sequelize.DataTypes.INTEGER,
        references: {
          model: "usuarios",
          key: "id",
          allowNull: false
        },
      },
      idDestinatario: {
        type: Sequelize.DataTypes.INTEGER,
        references: {
          model: "usuarios",
          key: "id",
          allowNull: false
        },
      },
    });
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.dropTable("destinatariosRecebedores");
  },
};
