// models/score.js
import { DataTypes } from "sequelize";
import sequelize from "./index.js";
import User from "./user.js";

const Score = sequelize.define("Score", {
  points: { type: DataTypes.INTEGER, defaultValue: 0 }
});

User.hasMany(Score);
Score.belongsTo(User);

export default Score;