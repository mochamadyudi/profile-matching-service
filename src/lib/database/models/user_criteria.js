'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class user_criteria extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsTo(models?.user, {foreignKey:"userId"})
      this.belongsTo(models?.criteria, {foreignKey:"criteriaId"})
      // define association here
    }
  }
  user_criteria.init({
    userId: DataTypes.INTEGER,
    criteriaId: DataTypes.INTEGER,
    value: DataTypes.INTEGER
  }, {
    sequelize,
    freezeTableName:true,
    modelName: 'user_criteria',
  });
  return user_criteria;
};