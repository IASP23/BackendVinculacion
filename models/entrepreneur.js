import { DataTypes } from "sequelize";
import { sequelize } from "../config/mysql.js";
import { Entrepreneurship } from "./entrepreneurship.js";
import { Mentorship } from "./mentorship.js";
import { Moc_Courses } from "./moc_courses.js";

export const Entrepreneur = sequelize.define(
    "entrepreneur",
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

        email: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        
        cellPhone: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    
        date_birth: {
            type: DataTypes.DATE,
            allowNull: false,
        },
    
        identification: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    },
    
    {
        timestamps: true,
    }
);

/* Cursos MOC */
Entrepreneur.hasMany(Moc_Courses , {
    foreignKey : 'entrepreneurId' , 
    sourceKey : 'id' 
  })
  
  Moc_Courses.belongsTo(Entrepreneur , {
  foreignKey : 'entrepreneurId' , 
    targetId : 'id'
  })

/* Mentorias */
  Entrepreneur.hasMany(Mentorship , {
    foreignKey : 'entrepreneurId' , 
    sourceKey : 'id' 
  })
  
  Mentorship.belongsTo(Entrepreneur , {
  foreignKey : 'entrepreneurId' , 
    targetId : 'id'
  })

  /* Emprendimientos */
Entrepreneur.hasMany(Entrepreneurship , {
    foreignKey : 'entrepreneurId' , 
    sourceKey : 'id' 
  })
  
  Entrepreneurship.belongsTo(Entrepreneur , {
  foreignKey : 'entrepreneurId' , 
    targetId : 'id'
  })

  