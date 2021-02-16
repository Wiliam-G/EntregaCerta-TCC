'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable('funcionarios', {
      id: {
        type: Sequelize.DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
      },
      nome: { type: Sequelize.STRING, allowNull: false},
      admin: { type: Sequelize.INTEGER},
      idEmpresa: {
        type: Sequelize.INTEGER,
        references: {model: 'empresas', key: 'id'},
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      }
    })
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.dropTable('funcionarios');
  }
};
