"use strict";

const UserSchema = (sql, DataTypes) => 
 sql.define("users", {
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });


module.exports=UserSchema;
