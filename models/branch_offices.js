import { DataTypes } from "sequelize";
import { sequelize } from "../config/mysql.js";

export const Branch_Offices = sequelize.define(
    "branch_offices",
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
          },
        province: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    
        city: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    
        principal_street: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        
        second_street: {
            type: DataTypes.STRING,
            allowNull: false,
        }
    },
    
    {
        timestamps: true,
    }
);

