"use strict";

require("dotenv");
const userSchema=require('./usersSchema');
const POSTGRES_URL =
  process.env.NODE_ENV === "test"
    ? "sqlite:memory "
    : "postgres://localhost:5432/lab6";

const {Sequelize,DataTypes}=require('sequelize');

let sql=new Sequelize(POSTGRES_URL,{});

module.exports={
    users:userSchema(sql,DataTypes),
    db:sql
}