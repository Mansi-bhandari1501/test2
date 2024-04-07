import express from 'express';
import bookController from '../controller/book.controller.js';
import upload from '../middlewares/uplod.middleware.js'
import { requireSignIn } from '../middlewares/auth.middleware.js';
const {addbook,getbook,getAllBook,deletebook} = bookController;
const router = express.Router()

router.post("/addbook",function(req, res){
    // Controller.Create
    upload, addbook
  });
router.get("/search/:key",getbook)
router.get("/books",getAllBook)
router.delete("/delete/:key",requireSignIn,deletebook)
export default router;