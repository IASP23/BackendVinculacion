import { DataTypes } from "sequelize";
import { sequelize } from "../config/mysql.js";
import { Branch_Offices } from "./branch_offices.js";
import { Products } from "./products.js";

export const Entrepreneurship = sequelize.define(
    "entrepreneurship",
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
    
        
        cellPhone: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        
        email: {
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

/* BranchOffices */
Entrepreneurship.hasMany(Branch_Offices , {
    foreignKey : 'entrepreneurshipId' , 
    sourceKey : 'id' 
  })
  
  Branch_Offices.belongsTo(Entrepreneurship , {
  foreignKey : 'entrepreneurshipId' , 
    targetId : 'id'
  })

  /* Products */
  Entrepreneurship.hasMany(Products , {
    foreignKey : 'entrepreneurshipId' , 
    sourceKey : 'id' 
  })
  
  Products.belongsTo(Entrepreneurship , {
  foreignKey : 'entrepreneurshipId' , 
    targetId : 'id'
  })

