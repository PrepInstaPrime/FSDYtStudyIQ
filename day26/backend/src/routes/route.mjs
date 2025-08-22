import express from 'express'
import { createUser } from '../controllers/userController.mjs';
const router = express.Router();
router.get('/',(req,res)=>{
    res.send({status:"ok", message:"i am connected"})
})
router.post('/registration',createUser)
export default router;