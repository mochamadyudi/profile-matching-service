'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class travel extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.hasMany(models.criteria, {foreignKey:"travelId"})
    }
  }
  travel.init({
    name: DataTypes.STRING,
    thumbnail: DataTypes.STRING,
    description: DataTypes.STRING,
    location: DataTypes.STRING,
    deletedAt:DataTypes.DATE,
    createdAt:DataTypes.DATE,
    updatedAt:DataTypes.DATE,
  }, {
    sequelize,
    freezeTableName:true,
    modelName: 'travel',
  });
  return travel;
};