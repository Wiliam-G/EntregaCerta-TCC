const { Model, DataTypes } = require("sequelize");

class Usuario extends Model {
  static init(sequelize) {
    super.init(
      {
        nome: DataTypes.STRING,
        telefone: DataTypes.STRING,
        codigo: DataTypes.STRING,
      },
      { sequelize, tableName: "usuarios" }
    );
  }

  // Criando o relacionamento
  static associate(models) {
    // usuario pertence a um endereco
    this.hasMany(models.Endereco, {
      foreignKey: "idUsuario",
      as: "enderecos",
    });
    // usuario tem muitas encomendas
    this.hasMany(models.Encomenda, {
      foreignKey: "idDestinatario",
      as: "destinatarioEncomenda",
    });

    this.hasMany(models.Encomenda, {
      foreignKey: "idRecebedor",
      as: "recebedorEncomenda",
    });

    this.hasMany(models.DestinatarioRecebedor, {
      foreignKey: "idDestinatario",
      as: "destinatarios",
    });

    this.hasMany(models.DestinatarioRecebedor, {
      foreignKey: "idRecebedor",
      as: "recebedores",
    });
  }
}

module.exports = Usuario;
