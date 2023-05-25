'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Training extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Training.init({
    entitled: DataTypes.STRING,
    periode: DataTypes.STRING,
    price: DataTypes.INTEGER,
    description: DataTypes.TEXT,
    idadmin: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Training',
  });
  return Training;
};