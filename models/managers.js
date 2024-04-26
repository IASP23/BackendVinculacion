import { DataTypes } from "sequelize";
import { sequelize } from "../config/mysql.js";
import { Mentorship } from "./mentorship.js";

export const Managers = sequelize.define(
    "managers",
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
    
        apellido: {
            type: DataTypes.STRING,
            allowNull: false,
        },

        fecha_nac: {
            type: DataTypes.DATE,
            allowNull: false,
        },
    
        celular: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        
        correo: {
            type: DataTypes.STRING,
            allowNull: false,
        }
    },
    
    {
        timestamps: true,
    }
);

//Conection MentorShip

Managers.hasMany(Mentorship , {
    foreignKey : 'ManagersId' , 
    sourceKey : 'id' 
  })
  
  Mentorship.belongsTo(Managers , {
  foreignKey : 'ManagersId' , 
    targetId : 'id'
  })