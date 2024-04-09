import mongoose from "mongoose";


// const questionArr = new mongoose.Schema({

//   questions: { type: String },
//   options: [{ option: String, 
//     // isCorrect: Boolean, 
//     // id: Number 
// }],
//   correctAnswer: { type: String },
// });
const testSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Users"
    },
    uuId: {
        type: String,

    },
    quizTitle: {
        type: String,
        require: true,
    },
    category: {
        type: String,
        // enum: ["science", "sst", "Biology", "Technical"],
    },
    questionArray: [{
        questions: { type: String },
        options: [{ option: String }],
        correctAnswer: { type: String },
    }],

    description: {
        type: String,
    },
    coverimage: {
        type: [String],
        default: []
    },
    time: {
        type: String
    },
    expiry: {
        type: Date,

    },
    created: {
        type: Date,

    },


    //   const postQuizSchema = new mongoose.Schema({
    //     title: { type: String },
    //     questionArray: [questionArr],
    //     createdAt: {
    //       type: Date,
    //       default: new Date(),
    //     },
    //   });


})

export const testModel = mongoose.model("Test", testSchema);