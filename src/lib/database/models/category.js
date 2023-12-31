'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class category extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  category.init({
    name: DataTypes.STRING,
    slug: DataTypes.STRING,
    color: DataTypes.STRING,
    background: DataTypes.STRING,
    deletedAt:DataTypes.DATE,
  }, {
    sequelize,
    modelName: 'category',
    freezeTableName:true
  });
  return category;
};