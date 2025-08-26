// models/task.js
import { DataTypes } from "sequelize";
import sequelize from "./index.js";

const Task = sequelize.define("Task", {
  title: { type: DataTypes.STRING, allowNull: false },
  description: { type: DataTypes.STRING },
  completed: { type: DataTypes.BOOLEAN, defaultValue: false },
  points: { type: DataTypes.INTEGER, defaultValue: 5 }
});

export default Task;