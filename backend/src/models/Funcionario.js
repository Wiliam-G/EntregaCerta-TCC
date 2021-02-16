const { Model, DataTypes } = require("sequelize");

class Funcionario extends Model {
  static init(sequelize) {
    super.init(
      {
        nome: DataTypes.STRING,
        admin: DataTypes.INTEGER,
        idEmpresa: {
          type: DataTypes.INTEGER,
          references: {
            model: "Empresa",
            key: "id",
          },
        },
      },
      { sequelize, tableName: "funcionarios" }
    );
  }

  // Criando o relacionamento
  static associate(models) {
    // funcionario pertence a uma empresa
    this.belongsTo(models.Empresa, { foreignKey: "idEmpresa", as: "empresa" });
    // funcionario tem muitas encomendas
    this.hasMany(models.Encomenda, {
      foreignKey: "idFuncionario",
      as: "encomendas",
    });
  }
}

module.exports = Funcionario;
