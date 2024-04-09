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

router.post('/', addtest);
router.post('/addQuestion', addQuestion);
router.post('/addResult',addUserResult);
router.get('/',getAllTest)
router.get('/:_id',getTest)
router.get('/search',searchController)
router.delete('/:id',deleteTest)
export default router;

