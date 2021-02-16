const { Model, DataTypes } = require("sequelize");
const Usuario = require("./Usuario");

class Encomenda extends Model {
  static init(sequelize) {
    super.init(
      {
        idFuncionario: {
          type: DataTypes.INTEGER,
          references: {
            model: "Funcionario",
            key: "id",
          },
        },
        idDestinatario: {
          type: DataTypes.INTEGER,
          references: {
            model: "Usuario",
            key: "id",
          },
        },
        idRecebedor: {
          type: DataTypes.INTEGER,
          references: {
            model: "Usuario",
            key: "id",
          },
        },
        idEmpresa: {
          type: DataTypes.INTEGER,
          references: {
            model: "Empresa",
            key: "id",
          },
        },
        idEndereco: {
          type: DataTypes.INTEGER,
          references: {
            model: "Endereco",
            key: "id",
          },
        },
        dataEntregaPrevista: DataTypes.DATE,
        dataRecebimento: DataTypes.DATE,
        dataEnvio: DataTypes.DATE,
        codigoEncomenda: DataTypes.STRING,
      },
      { sequelize, tableName: "encomendas" }
    );
  }

  // Criando o relacionamento
  static associate(models) {
    // encomenda pertence a um funcionario
    this.belongsTo(models.Funcionario, {
      foreignKey: "idFuncionario",
      as: "funcionario",
    });

    // encomenda possui um destinatario
    this.belongsTo(models.Usuario, { foreignKey: "idDestinatario", as: "destinatario" });

    // encomenda possui um recebedor
    this.belongsTo(models.Usuario, { foreignKey: "idRecebedor", as: "recebedor" });

    //encomenda possui muitas avaliação
    this.hasMany(models.Avaliacao, {
      foreignKey: "idEncomenda",
      as: "avaliacoes",
    });

    this.belongsTo(models.Empresa, { foreignKey: "idEmpresa", as: "empresa" });

    // encomenda pertence a um endereco
    this.belongsTo(models.Endereco, {
      foreignKey: 'idEndereco',
      as: "endereco"
    })
  }
}

module.exports = Encomenda;
