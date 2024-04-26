import { Router } from "express";
import { createEntrepreneurship, deleteEntrepreneurship, getEntrepreneurship, getEntrepreneurshipes, updateEntrepreneurship } from "../controllers/entrepreneurship.js";
 
const router = Router();

router.get("/entrepreneurship" ,getEntrepreneurshipes);   
router.post("/entrepreneurship" , createEntrepreneurship); 
router.put("/entrepreneurship/:id" , updateEntrepreneurship); 
router.delete("/entrepreneurship/:id" , deleteEntrepreneurship); 
router.get("/entrepreneurship/:id" , getEntrepreneurship); 


export default router 