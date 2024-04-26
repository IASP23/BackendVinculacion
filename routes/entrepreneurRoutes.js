import { Router } from "express";
import { createEntrepreneur, deleteEntrepreneur, getEntrepreneur, getEntrepreneurs, updateEntrepreneur } from "../controllers/entrepreneur.js";
 
const router = Router();

router.get("/entrepreneur" ,getEntrepreneurs);   
router.post("/entrepreneur" , createEntrepreneur); 
router.put("/entrepreneur/:id" , updateEntrepreneur); 
router.delete("/entrepreneur/:id" , deleteEntrepreneur); 
router.get("/entrepreneur/:id" , getEntrepreneur); 


export default router 