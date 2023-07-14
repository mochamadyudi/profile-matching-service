'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class options extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  options.init({
    opt_name: DataTypes.STRING,
    opt_value: DataTypes.STRING,
    opt_type: DataTypes.STRING,
    autoload: DataTypes.STRING,
    createdAt: DataTypes.DATE,
    deletedAt: DataTypes.DATE,
    updatedAt: DataTypes.DATE
  }, {
    sequelize,
    freezeTableName:true,
    modelName: 'option',
    
  });
  return options;
};