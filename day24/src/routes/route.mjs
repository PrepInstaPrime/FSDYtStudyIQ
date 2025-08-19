import express from 'express'
const router = express.Router();
import {createUser, userDetail,getUser} from '../controllers/userController.mjs';
// router.get('/',(req,res)=>{
//     res.send("hey i am coming from route");
// })
router.get('/',userDetail);
router.post('/create',createUser);
router.get('/user/:name',getUser);
export default router;