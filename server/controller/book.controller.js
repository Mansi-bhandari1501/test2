
import errorHandler from '../lib/utils.js';
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
            message: 'Book Fetched succefully',
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
            message: 'Book deleted succefully',
            book: response
        })
    }
    catch(error)
    {
        errorHandler(res,error);
    }
}

const bookController = {
    addbook,
    getbook,
    deletebook,
    getAllBook
}

export default bookController;
