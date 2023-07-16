'use strict';
const {
  Model
} = require('sequelize');
const moment = require("moment");
const {hashUuid} = require("@yid/helpers");
module.exports = (sequelize, DataTypes) => {
  class users extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.hasOne(models?.user_role,{targetKey: "userId"})
      this.hasMany(models?.user_criteria,{targetKey: "userId"})
      // define association here
    }
  }
  users.init({
    uuid: DataTypes.STRING,
    fullName:DataTypes.STRING,
    email: DataTypes.STRING,
    email_verified_at: DataTypes.DATE,
    password: DataTypes.STRING,
    salt: DataTypes.STRING,
    remember_token: DataTypes.STRING,
    activated: DataTypes.BOOLEAN,
    status: DataTypes.STRING,
    signup_ip_address: DataTypes.STRING,
  }, {
    sequelize,
    freezeTableName:true,
    modelName: 'user',
    hooks: {
      beforeCreate(attributes, options) {
        attributes.uuid = hashUuid();
        attributes.activated = true
        attributes.status = "active"
        attributes.createdAt = moment()
        attributes.updatedAt = moment()
        
      }
    }
  });
  return users;
};