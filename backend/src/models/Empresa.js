const { Model, DataTypes } = require("sequelize");

class Empresa extends Model {
  static init(sequelize) {
    super.init(
      {
        nomeEmpresa: DataTypes.STRING,
      },
      { sequelize, tableName: "empresas" }
    );
  }

  // Criando o relacionamento
  static associate(models) {
    // empresa tem muitos funcionarios
    this.hasMany(models.Funcionario, {
      foreignKey: "idEmpresa",
      as: "funcionarios",
    });

    this.hasMany(models.Encomenda, {
      foreignKey: "idEmpresa",
      as: "encomendas",
    });
  }
}

module.exports = Empresa;
                                        