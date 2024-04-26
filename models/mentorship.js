import { DataTypes } from "sequelize";
import { sequelize } from "../config/mysql.js";
import { Content_Mentorship } from "./content_mentorship.js";

export const Mentorship = sequelize.define(
    "mentorship",
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
          },
    
        title: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    
        description: {
            type: DataTypes.STRING,
            allowNull: false,
        },

        date : {
            type: DataTypes.DATE,
            allowNull: false,
        },
    },
    {
        timestamps: true,
    }
);

Mentorship.hasMany(Content_Mentorship , {
    foreignKey : 'mentorshipId' , 
    sourceKey : 'id' 
  })
  
  Content_Mentorship.belongsTo(Mentorship , {
  foreignKey : 'mentorshipId' , 
    targetId : 'id'
  })

