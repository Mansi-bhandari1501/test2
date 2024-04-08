import express from 'express';
import testController from '../controller/test.controller.js';
import upload from '../middlewares/uplod.middleware.js'
import { requireSignIn } from '../middlewares/auth.middleware.js';
const {  
    addtest,
    getTest,
    deleteTest,
    getAllTest,
    addQuestion,
    addUserResult,
    searchController
} = testController;
const router = express.Router()

router.post('/',requireSignIn, addtest);
router.post('/addQuestion',requireSignIn, addQuestion);
router.post('/addResult', requireSignIn,addUserResult);
router.get('/',requireSignIn,getAllTest)
router.get('/:_id',requireSignIn,getTest)
router.get('/search',searchController)
router.delete('/:id',requireSignIn,deleteTest)
export default router;

