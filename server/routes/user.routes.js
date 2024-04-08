import express  from "express";
import { userController } from '../controller/index.js';
import { isAdmin, requireSignIn } from "../middlewares/auth.middleware.js";

const { loginController,  registerController, getAllUsers, userDetail,followController} = userController;
const router = express.Router()


 router.get('/:existingUser', requireSignIn,getAllUsers);
 router.post('/register',registerController);
 router.post('/login', loginController);
 router.put('/userDetails/:_id',requireSignIn, userDetail);
 router.get('/admin-auth',requireSignIn,isAdmin, (req, res) => {
    res.status(200).send({ ok: true });
  });
  router.get("/user-auth", requireSignIn, (req, res) => {
    res.status(200).send({ ok: true });
  });
 export default router;
