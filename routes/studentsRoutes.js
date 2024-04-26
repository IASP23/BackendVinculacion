import { Router } from "express";
import { createStudent, deleteStudent, getStudent, getStudents, updateStudent } from "../controllers/students.js";
import { checkToken } from "../middleware/middlewareValidateLogin.js";
 
const router = Router();

router.get("/students" , checkToken ,getStudents);   
router.post("/students" , createStudent); 
router.put("/students/:id" , updateStudent); 
router.delete("/students/:id" , deleteStudent); 
router.get("/students/:id" , getStudent); 


export default router 