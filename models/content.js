import { DataTypes } from "sequelize";
import { sequelize } from "../config/mysql.js";

export const Content = sequelize.define(
    "content",
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
          },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    
        description: {
            type: DataTypes.STRING,
            allowNull: false,
        }
    },
    
    {
        timestamps: true,
    }
);

