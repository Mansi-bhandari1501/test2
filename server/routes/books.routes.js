import express from 'express';
import bookController from '../controller/book.controller.js';
import upload from '../middlewares/uplod.middleware.js'
import { requireSignIn } from '../middlewares/auth.middleware.js';
const {addbook,getbook,getAllBook,deletebook,getAllProductController} = bookController;
const router = express.Router()

router.get("/",requireSignIn,getAllBook)
router.post("/",upload.single("image"), addbook);
// router.get("/search/:key",getbook)
router.get("/search",getAllProductController)
router.delete("/delete/:key",deletebook)
export default router;