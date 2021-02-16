const { Model, DataTypes } = require("sequelize");

class DestinatarioRecebedor extends Model {
  static init(sequelize) {
    super.init(
      {
        idRecebedor: {
          type: DataTypes.INTEGER,
          references: {
            Model: "Usuario",
            key: "id",
          },
        },
        idDestinatario: {
          type: DataTypes.INTEGER,
          references: {
            Model: "Usuario",
            key: "id",
          },
        },
      },
      { sequelize, tableName: "destinatariosRecebedores" }
    );
  }

  //criando os relacionamentos
  static associate(models) {
    this.belongsTo(models.Usuario, {
      foreignKey: "idDestinatario",
      as: "destinatario",
    });

    this.belongsTo(models.Usuario, {
      foreignKey: "idRecebedor",
      as: "recebedor",
    });
  }
}

module.exports = DestinatarioRecebedor;
