"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn("avaliacoes", "idUsuario", {
      type: Sequelize.DataTypes.INTEGER,
      references: {
        model: "usuarios",
        key: "id",
      },
      allowNull: false,
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn("avaliacoes", "idUsuario");
  },
};
