'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class gap_mapping extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  gap_mapping.init({
    gap: DataTypes.STRING,
    weight: DataTypes.FLOAT,
    description: DataTypes.STRING
  }, {
    sequelize,
    freezeTableName:true,
    modelName: 'gap_mapping',
  });
  return gap_mapping;
};