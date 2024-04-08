import mongoose from "mongoose";

const usersSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
    },
    Name: {
        type: String,
        // required: true
        default: null
    },
    images:{
      type:[String],
      default:[]
  },
    role: {
        type: String,
        enum:["user","admin"],
        // required: true
        // default: "user"
    },
   
    phone: {
        type: String,
        default: null
    },
   
    

   
 // followers: [{
    //     userid:
    //     {
    //         type: mongoose.Schema.Types.ObjectId,
    //         ref: "User"
    //     },
    //     status: {
    //         type: String,
    //         enum: ['pending', 'accepted', 'rejected'],
    //         default : 'pending',
    //     }
    // }],
    // following: [{
    //     userid:
    //     {
    //         type: mongoose.Schema.Types.ObjectId,
    //         ref: "User"
    //     },
    //     status: {
    //         type: String,
    //         enum: ['pending', 'accepted', 'rejected'],
    //         default : 'pending',
    //     }

    // }]
  
}, { timestamps: true })
const UserModel = mongoose.model('Users', usersSchema);
export default UserModel;