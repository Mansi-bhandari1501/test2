
import errorHandler from '../lib/utils.js';
import { bookModel } from '../models/book.model.js';
import { bookService } from '../service/index.js';

export const addbook = async (req,res) => {
    try{
        // console.log("dghwjsgfuasgfusdygfusfgufey-------------------------------------------------------------------------------------------------------------")
        const response = await bookService.addbook(req);
        // console.log("-------------response-------",response)
        return res.status(201).send({
            success:true,
            message: 'Book added succefully',
            book: response
        })
    }
    catch(error)
    {
        errorHandler(res,error);
    }
}
export const getbook = async (req,res) => {
    try{
        const response = await bookService.getBook(req);
        console.log("response",response)
        return res.status(200).send({
            success:true,
            message: 'Book Fetched successfully',
            book: response
        })
    }
    catch(error)
    {
        errorHandler(res,error);
    }
}
export const deletebook = async (req,res) => {
    try{
        const response = await bookService.deleteBook(req);
        console.log("response",response)
        return res.status(200).send({
            success:true,
            message: 'Book deleted succefully',
            book: response
        })
    }
    catch(error)
    {
        errorHandler(res,error);
    }
}
export const getAllBook = async (req,res) => {
    try{
        const response = await bookService.getAllBook(req);
        console.log("response",response)
        return res.status(200).send({
            success:true,
            message: ' Book fetched succesfully',
            book: response
        })
    }
    catch(error)
    {
        errorHandler(res,error);
    }
}
const getAllProductController = async (req, res) => {
    try {
      const page = parseInt(req.query.page) || 1;
      const limit = parseInt(req.query.limit) || 10;
      // Search query
      const searchQuery = req.query.q
        ? {
            $or: [
              { title: { $regex: req.query.q, $options: "i" } },
              { description: { $regex: req.query.q, $options: "i" } },
              { category: { $regex: req.query.q, $options: "i" } },
              { author: { $regex: req.query.q, $options: "i" } },
            ],
          }
        : {};
      const products = await bookModel.find(searchQuery)
        .skip((page - 1) * limit)
        .limit(limit);
      const totalCount = await bookModel.countDocuments(searchQuery);
      res.json({
        page,
        totalPages: Math.ceil(totalCount / limit),
        totalCount,
        products,
      });
    } catch (error) {
      console.error("Error getting products:", error);
      res.status(500).json({ message: "Internal server error" });
    }
  };

const bookController = {
    addbook,
    getbook,
    deletebook,
    getAllBook,
    getAllProductController
}

export default bookController;
