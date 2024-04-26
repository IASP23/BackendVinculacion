import { DataTypes } from "sequelize";
import { sequelize } from "../config/mysql.js";

export const Moc_Courses = sequelize.define(
    "moc_courses",
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
    
        descripcion: {
            type: DataTypes.STRING,
            allowNull: false,
        }
    },
    
    {
        timestamps: true,
    }
);

