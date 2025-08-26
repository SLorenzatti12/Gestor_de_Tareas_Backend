// models/user.js
import { DataTypes } from "sequelize";
import sequelize from "./index.js";

const User = sequelize.define("User", {
  name: { type: DataTypes.STRING, allowNull: false, unique: true },
  score: { type: DataTypes.INTEGER, defaultValue: 0 }
});

export default User;