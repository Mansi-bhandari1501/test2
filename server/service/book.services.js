import { bookModel } from "../models/book.model.js";



const addbook = async (req) => {
    try {
        console.log(req.file)
        const newBook ={
            title: req.body.title,
            author: req.body.author,
            category: req.body.category,
            description: req.body.description,
            coverimage: req.file.path,
        };

        const savedBook = await bookModel(newBook).save();
        console.log(savedBook)
        return savedBook;
    }
    catch(error){
        console.log(error);
        throw error; 
    }
};

const getBook = async(req)=>{
    console.log("key",req.params.key)
    
    try{
        const books = await bookModel.find(
            {
                "$or":[
                    {"title":{$regex:req.params.key}},
                    {"author":{$regex:req.params.key}},
                    {"category":{$regex:req.params.key}}                    
                ]
            }
        )
        console.log("cgcg",books)
        return books

    }
    catch(error){
        throw(error)
    }
    
}
const deleteBook = async(req)=>{
    try{

        const book = await bookModel.findOneAndDelete({"_id":req.params.id})
    }
    catch(error){
        throw(error)

    }
    return book
}
const getAllBook = async(req)=>{
    try{
        const books = await bookModel.find();
        return books
    }
    catch(error){
        throw(error)
    }
}

const bookService = {
    addbook,
    getBook,
    deleteBook,
    getAllBook
};
export default bookService;
