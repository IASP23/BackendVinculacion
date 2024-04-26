import { Router } from "express";
import { createUser, deleteUser, getUser, getUsers, login, updateUser } from "../controllers/users.js";
 
const router = Router();

router.get("/register"  , getUsers);   
router.post("/register" , createUser); 
router.put("/register/:id" , updateUser); 
router.delete("/register/:id" , deleteUser); 
router.get("/register/:id" , getUser); 

router.post("/login"  , login)

export default router 