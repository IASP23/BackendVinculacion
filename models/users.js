import { DataTypes, DATE, DATEONLY } from "sequelize";
import { sequelize } from "../config/mysql.js";
import { Entrepreneur } from "./entrepreneur.js";
import { Managers } from "./managers.js";
import { Student } from "./student.js";

export const User = sequelize.define(
  "users",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },

    userName: {
      type: DataTypes.STRING,
      allowNull: false,
      unique : true , 
    },

    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    role: {
      type: DataTypes.ENUM(["user", "student" , "admin" , "entreprenaur"]),
      allowNull: false,
    },
  },
  {
    timestamps: true,
  }

);

User.hasMany(Student , {
    foreignKey : 'userId' , 
    sourceKey : 'id' 
})

Student.belongsTo(User , {
  foreignKey : 'userId' , 
    targetId : 'id'
})

//Conection User and Manager 
User.hasMany(Managers , {
  foreignKey : 'userId' , 
  sourceKey : 'id' 
})

Managers.belongsTo(User , {
foreignKey : 'userId' , 
  targetId : 'id'
})

//Conection Entrepreneur

User.hasMany(Entrepreneur , {
  foreignKey : 'userId' , 
  sourceKey : 'id' 
})

Entrepreneur.belongsTo(User , {
foreignKey : 'userId' , 
  targetId : 'id'
})