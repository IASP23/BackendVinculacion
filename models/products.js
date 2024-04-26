import { DataTypes } from "sequelize";
import { sequelize } from "../config/mysql.js";

export const Products = sequelize.define(
    "products",
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
        },
    
        value: {
            type: DataTypes.DOUBLE,
            allowNull: false,
        }
      
    },
    
    {
        timestamps: true,
    }
);
