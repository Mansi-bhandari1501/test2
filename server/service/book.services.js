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
    
    // try{
    //     const books = await bookModel.find(
    //         {
    //             "$or":[
    //                 {"title":{$regex:req.params.key}},
    //                 {"author":{$regex:req.params.key}},
    //                 {"category":{$regex:req.params.key}}                    
    //             ]
    //         }
    //     )
    //     console.log("cgcg",books)
    //     return books

    // }
    // catch(error){
    //     throw(error)
    // }
    try {
        // const userId = req.id
        // console.log(userId)
        const { body } = req.query
        const books = await bookModel.find({ "$or": [{ "title": { $regex: ".*" + body + ".*", $options: 'i' } }, { "author": { $regex: ".*" + body + ".*", $options: 'i' } }, { "genre": { $regex: ".*" + body + ".*", $options: 'i' } }] })

        if (books.length > 0) {
            return books
        }
        else {
            return 404
        }


    } catch (err) {
        console.log(err)
        return err
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
        console.log("get request")
        const books = await bookModel.find({})
        .sort({ createdAt: 'descending' })
        // const books = await bookModel.findAll();
        console.log(books)
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
