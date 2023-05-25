'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ModelService extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  ModelService.init({
    entitled: DataTypes.STRING,
    price: DataTypes.INTEGER,
    idservice: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'ModelService',
  });
  return ModelService;
};