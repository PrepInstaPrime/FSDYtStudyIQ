import express from 'express'
import { createUser, getUser,updateUser, deleteUser } from '../controllers/userController.mjs';
const router = express.Router();
router.get('/',getUser)
router.post('/registration',createUser)
router.patch('/update',updateUser)
router.delete('/delete', deleteUser)
export default router;