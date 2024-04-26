import  express  from "express";
import cors from 'cors';
import { sequelize } from "./config/mysql.js";
import usersRouters from "./routes/usersRoutes.js";
import studentsRouters from "./routes/studentsRoutes.js";
import entrepreneurRoutes from "./routes/entrepreneurRoutes.js";
import entrepreneurshipRoutes from "./routes/entrepreneurshipRoutes.js";
/* Tables MySql */
import './models/branch_offices.js'
import './models/content_mentorship.js'
import './models/content.js'
import './models/entrepreneur.js'
import './models/entrepreneurship.js'
import './models/managers.js'
import './models/mentorship.js'
import './models/moc_courses.js'
import './models/products.js'
import bodyParser from 'body-parser'


const app = express() //Levanta el servidor 

async function  main ()  {
    try {
      await sequelize.sync({force: false});
      console.log("MySQL conexion correcta");
    } catch (e) {
      console.log("MySQL Fallo en la conexion ", e);
    }
  };

  main();


app.use(cors())
app.use(bodyParser.json()) // Se prepara el servidor a recibir la data 
app.use(bodyParser.urlencoded({extended : false }))
const port = process.env.PORT || 3000

app.listen((port) , () => {
    console.log (`http://localhost:${port}`)
})

 
app.use(usersRouters);
app.use(studentsRouters);
app.use(entrepreneurRoutes);
app.use(entrepreneurshipRoutes);