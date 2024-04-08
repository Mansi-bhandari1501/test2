
import { resultModel } from "../models/result.model.js";
import { testModel } from "../models/test.model.js";
import { v4 as uuidv4 } from 'uuid';


const addtest = async (req) => {

    try {
        console.log(req.file)
        const uuId = uuidv4();
        // const uuId = (await testModel.countDocuments({}).exec()) + 1001;
        // const email = req.user.email.toLowerCase();
        // const amount = req.body.amount;
        const questionArray = req.body.questionArray;
        const quizTitle = req.body.quizTitle;
        const time = req.body.time;
        const expiry = Date.parse(req.body.expiry);
        const created = Date.parse(req.body.created);

        const newtest = new testModel({
            uuId,
            quizTitle,
            time,
            expiry,
            created,
            questionArray
        });

        const savedTest = await testModel(newtest).save();
        console.log(savedTest)
        return savedTest;
    }
    catch (error) {
        console.log(error);
        throw error;
    }
};
const addQuestion = async (req) => {

    try {
        const testid = req.body.testid;
        const questionArray = req.body.questionArray;
        const doc = await testModel.findOne({ _id: testid })
        if (!doc) {
            //     return res.status(400).send({ message: "Test doesn't exist!" });
            throw Object.assign(new Error(), { name: "BAD_REQUEST", message: "Test doesn't exist!" });
            
        }
        // if (Date.parse(doc.expiry) < Date.now()) {
        //     // return res.status(400).send({ message: "Test has expired!! " });
        //     throw Object.assign(new Error(), { name: "TIMEOUT", message: "Test has expired!! " });
            
        // }
        const questions = await testModel.findByIdAndUpdate(
            {_id:testid},
            { $push: { questionArray: questionArray }})

      
        console.log(questions)
        return questions;
    }
    catch (error) {
        console.log(error);
        throw error;
    }
};

// });

const getTest = async (req) => {
    console.log("key", req.params)
    try {
     
        const test = await testModel.findById(req.params)
        console.log(test)
        return test

    } catch (err) {
        console.log(err)
        return err
    }

}
const deleteTest = async (req) => {
    try {

        const test = await testModel.findOneAndDelete({ "_id": req.params.id })
        return test
    }
    catch (error) {
        throw (error)

    }
}
const getAllTest = async (req) => {
    try {
        console.log("get request")
        const tests = await testModel.find({})
            .sort({ createdAt: 'descending' });
        console.log(tests)
        return tests

    }
    catch (error) {
        throw (error)
    }
}
const addUserResult = async (req) => {
    try {
        const userId= req.body.userId
        const quizId= req.body.quizId
        const quizResult = req.body.quizResult  
        
        const newresult = new test({
            userId,
            quizId,
            quizResult,
          
        });

        const savedResult = await resultModel(newresult).save();
        console.log(savedResult)
        return savedResult;  
        }
          
    catch (error) {
        throw (error)
    }
}

const testService = {
    addtest,
    getTest,
    deleteTest,
    getAllTest,
    addQuestion,
    addUserResult
};
export default testService;

