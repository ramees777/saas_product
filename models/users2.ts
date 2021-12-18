import { DataTypes, Sequelize } from "sequelize";
import { sequelize } from "utils/database";
import { Users } from "./usert";

export const Users2 = sequelize.define(
  "users",
  {
    id: {
      primaryKey: true,
      type: DataTypes.INTEGER.UNSIGNED,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
    },
    email: {
      type: DataTypes.STRING,
    },
  },

  {
    schema: "users_tenant2",
  }
);

Users2.hasOne(Users, { onDelete: "CASCADE", onUpdate: "CASCADE" });

Users.belongsTo(Users2);
