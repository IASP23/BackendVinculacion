import {} from 'dotenv/config'
import Sequelize from "sequelize";

const database = process.env.MYSQL_DATABASE
const username = process.env.MYSQL_USER;
const password = process.env.MYSQL_PASSWORD;
const host = process.env.MYSQL_HOST;


export const sequelize = new Sequelize(database, username, password, {
  host: host,
  dialect: "mysql",
});



