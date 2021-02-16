const { Model, DataTypes } = require("sequelize");

//adicionei as colunas lat, lng e staticImageMapUrl
class Endereco extends Model {
  static init(sequelize) {
    super.init(
      {
        // id: { type: DataTypes.INTEGER, primaryKey: true },
        cidade: DataTypes.STRING,
        rua: DataTypes.STRING,
        numero: DataTypes.INTEGER,
        cep: DataTypes.STRING,
        bairro: DataTypes.STRING,
        estado: DataTypes.STRING,
        ativo: DataTypes.INTEGER,
        lat: DataTypes.DECIMAL(10, 8),
        lng: DataTypes.DECIMAL(11, 8),
        staticImageMapUrl: { type: DataTypes.STRING, allowNull: true },
        idUsuario: {
          type: DataTypes.INTEGER,
          references: {
            model: "Usuarios",
            key: "id",
          },
        },
      },
      { sequelize, tableName: "enderecos" }
    );
  }

  // Criando o relacionamento
  static associate(models) {
    // endereco tem muitos usuarios
    //this.hasMany(models.Usuario, { foreignKey: 'idEndereco', as: 'usuarios' });

    //endereco tem um usuário
    this.belongsTo(models.Usuario, {
      foreignKey: "idUsuario",
      as: "usuario",
    });

    this.hasMany(models.Encomenda, {
      foreignKey: "idEndereco",
      as: "encomendas"
    })
  }
}

module.exports = Endereco;
