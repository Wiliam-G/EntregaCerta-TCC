const { Model, DataTypes } = require("sequelize");

class Avaliacao extends Model {
  static init(sequelize) {
    super.init(
      {
        nota: DataTypes.INTEGER,
        descricao: DataTypes.STRING,
        dataAvaliacao: DataTypes.DATE,
        avaliado: DataTypes.BOOLEAN,
        tipo: DataTypes.INTEGER,
        idUsuario: {
          type: DataTypes.INTEGER,
          references: {
            model: "Usuario",
            key: "id",
          },
        },
        idEncomenda: {
          type: DataTypes.INTEGER,
          references: {
            model: "Encomenda",
            key: "id",
          },
        },
      },
      { sequelize, tableName: "avaliacoes" }
    );
  }

  //criando os relacionamentos
  static associate(models) {
    // uma avaliação pertence a uma encomenda
        this.belongsTo(models.Encomenda, {
          foreignKey: "idEncomenda",
          as: "encomenda",
        });
  }

  static tipoEncomenda() {
    return 1;
  }

  static tipoRecebimento() {
    return 2;
  }
}

module.exports = Avaliacao;
