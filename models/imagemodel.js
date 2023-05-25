'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ImageModel extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  ImageModel.init({
    idimage: DataTypes.INTEGER,
    idmodel: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'ImageModel',
  });
  return ImageModel;
};