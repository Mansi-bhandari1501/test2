import {  createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";
import { ACTION_TYPE } from "./productType";
export const fetchPost = createAsyncThunk(
    ACTION_TYPE.ADD_PRODUCT,
    async({token})=>{
        // console.log(token)
        console.log("FETCHPOSTSSS")

        let postUrl= `http://localhost:8080/books`
        const res = await axios.get(postUrl,{headers:{Authorization: token}});
        const data = await res.data;
        console.log(data.book);
        return data.book;
    }
)
export const createPost = createAsyncThunk(
    ACTION_TYPE.GET_PRODUCT_PRODUCT,
    async({formData, token}) => {
        try{

            console.log("token",formData);
            const res = await axios.post("http://localhost:8080/books", formData ,{
                headers: {
                  'Content-Type': 'multipart/form-data',
                  'Authorization': token,
                }
            }) 
            console.log(res)
            return res
        }catch(error){
            throw error;
        }
    })