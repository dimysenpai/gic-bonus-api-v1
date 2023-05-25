'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class OrderModel extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  OrderModel.init({
    idorder: DataTypes.INTEGER,
    idmodel: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'OrderModel',
  });
  return OrderModel;
};