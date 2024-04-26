import { DataTypes } from "sequelize";
import { sequelize } from "../config/mysql.js";
import { Content } from "./content.js";

export const Content_Mentorship = sequelize.define(
    "content_mentorship",
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

/* Conextion  */

Content_Mentorship.hasMany(Content , {
    foreignKey : 'entrepreneurId' , 
    sourceKey : 'id' 
  })
  
  Content.belongsTo(Content_Mentorship , {
  foreignKey : 'entrepreneurId' , 
    targetId : 'id'
  })
