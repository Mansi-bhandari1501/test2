
import errorHandler from '../lib/utils.js';
import { testModel } from '../models/test.model.js';
import testService from '../service/test.service.js';



export const addtest = async (req,res) => {
    try{
        const response = await testService.addtest(req);
        return res.status(201).send({
            success:true,
            message: 'Test added successfully',
            test: response
        })
    }
    catch(error)
    {
        errorHandler(res,error);
    }
}
export const getAllTest = async (req,res) => {
    try{
        const response = await testService.getAllTest(req);
        // console.log("response",response)
        return res.status(200).send({
            success:true,
            message: 'test Fetched successfully',
            test: response
        })
    }
    catch(error)
    {
        errorHandler(res,error);
    }
}
export const getAllQuestions = async (req,res) => {
    try{
        const response = await testService.getAllQuestions(req);
        // console.log("response",response.questionArray)
        return res.status(200).send({
          
            test: response.questionArray
        })
    }
    catch(error)
    {
        errorHandler(res,error);
    }
}
export const deleteTest = async (req,res) => {
    try{
        const response = await testService.deleteTest(req);
        // console.log("response",response)
        return res.status(200).send({
            success:true,
            message: 'test deleted successfully',
            book: response
        })
    }
    catch(error)
    {
        errorHandler(res,error);
    }
}
export const addQuestion = async (req,res) => {
    // console.log(req,"requestttt")
    try{
        const response = await testService.addQuestion(req);
        // console.log("response",response)
        return res.status(200).send({
            success:true,
            message: 'questions added successfully',
            question: response
        })
    }
    catch(error)
    {
        errorHandler(res,error);
    }
}
export const addUserResult = async (req,res) => {
    try{
        const response = await testService(req);
        // console.log("response",response)
        return res.status(200).send({
            success:true,
            message: 'Result added successfully',
            test: response
        })
    }
    catch(error)
    {
        errorHandler(res,error);
    }
}
export const getTest = async (req,res) => {
    try{
        const response = await testService.getTest(req);
        // console.log("response",response)
        return res.status(200).send({
            success:true,
            message: ' Test fetched succesfully',
            test: response
        })
    }
    catch(error)
    {
        errorHandler(res,error);
    }
}
const searchController = async (req, res) => {
    try {
      const page = parseInt(req.query.page) || 1;
      const limit = parseInt(req.query.limit) || 10;
      // Search query
      const searchQuery = req.query.q
        ? {
            $or: [
              { quizTitle: { $regex: req.query.q, $options: "i" } },
              { description: { $regex: req.query.q, $options: "i" } },
              { category: { $regex: req.query.q, $options: "i" } },
              { author: { $regex: req.query.q, $options: "i" } },
            ],
          }
        : {};
      const products = await testModel.find(searchQuery)
        .skip((page - 1) * limit)
        .limit(limit);
        console.log(products,"GSJGFUFGSJDF")
      const totalCount = await testModel.countDocuments(searchQuery);
      res.json({
        page,
        totalPages: Math.ceil(totalCount / limit),
        totalCount,
        test,
      });
    } catch (error) {
      console.error("Error getting tests:", error);
      res.status(500).json({ message: "Internal server error" });
    }
  };

const testController = {
    addtest,
    getTest,
    deleteTest,
    getAllTest,
    addQuestion,
    addUserResult,
    searchController,
    getAllQuestions
}

export default testController;
