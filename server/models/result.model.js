import mongoose from "mongoose";

const resultSchema = new mongoose.Schema({
    // uuId:{
    //     type:
    // },
    userId: { type: mongoose.Schema.Types.ObjectId, ref: "Users" },
    quizId: { type: mongoose.Schema.Types.ObjectId, ref: "Test" },
    quizResult: [],
})

export const resultModel = mongoose.model("Result", resultSchema);
// const mongoose = require('mongoose')
// const quizAttemptedSchema = new mongoose.Schema({
//   quizId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
//   quizResult: [],
// });
// const userSchema = new mongoose.Schema({
//     name: String,
//     email: String,
//     password: String,
//     Points:Number,
//     quizAttempted: [quizAttemptedSchema],
//   })
//   const User = new mongoose.model('User', userSchema)

//   module.exports=User