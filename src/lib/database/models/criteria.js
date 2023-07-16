'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class criteria extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.travel, {foreignKey:"travelId"})
      this.hasOne(models?.user_criteria, {foreignKey:"criteriaId"})
    }
  }
  criteria.init({
    travelId: DataTypes.INTEGER,
    label: DataTypes.STRING,
    description: DataTypes.STRING,
    value: DataTypes.INTEGER,
    isPrimary: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'criteria',
    freezeTableName:true
  });
  return criteria;
};