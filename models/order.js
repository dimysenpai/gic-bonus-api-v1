'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Order extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Order.init({
    matriculation: DataTypes.STRING,
    stardate: DataTypes.DATE,
    enddate: DataTypes.DATE,
    state: DataTypes.INTEGER,
    idcustomer: DataTypes.INTEGER,
    iddesigner: DataTypes.INTEGER,
    iddeliver: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Order',
  });
  return Order;
};