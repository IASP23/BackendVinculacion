import { DataTypes } from "sequelize";
import { sequelize } from "../config/mysql.js";

export const Student = sequelize.define(
    "students",
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
    
        lastname: {
            type: DataTypes.STRING,
            allowNull: false,
        },

        date_birth: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    
        identification: {
            type: DataTypes.STRING,
            allowNull: false,
        },

        cellPhone: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    
        email: {
            type: DataTypes.STRING,
            allowNull: false,
        }
    },
    
    {
        timestamps: true,
    }
);

