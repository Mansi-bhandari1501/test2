import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { ACTION_TYPE } from "./productType";
export const fetchPost = createAsyncThunk(
    ACTION_TYPE.GET_PRODUCT,
    async (token) => {
        try {
            // console.log(token)
            console.log("FETCHPOSTSSS")


            const res = await axios.get(`http://localhost:8080/tests`, { headers: { Authorization: token } });
            const data = await res.data.test;
            console.log(data);
            return data;
        }
        catch (error) {
            throw error;
        }
    })
export const fetchSingleTest = createAsyncThunk(
    ACTION_TYPE.GET_SINGLE_PRODUCT,
    async ({ token, _id }) => {
        try {
            // console.log(token)
            console.log(token, _id)


            const res = await axios.get(`http://localhost:8080/tests/${_id}`, { headers: { Authorization: token } });
            const data = await res.data.test;
            console.log(data);
            return data;
        }
        catch (error) {
            throw error;
        }
    })
export const createPost = createAsyncThunk(
    ACTION_TYPE.ADD_PRODUCT,
    async ({ newUser, token }) => {
        try {

            console.log("token", newUser);
            const res = await axios.post("http://localhost:8080/tests", newUser, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                    'Authorization': token,
                }
            })
            console.log(res)
            return res
        } catch (error) {
            throw error;
        }
    })
export const deletePost = createAsyncThunk(
    ACTION_TYPE.DELETE_PRODUCT,
    async ({ token, _id }) => {
        try {
            console.log(token, _id)
            console.log("token", _id);
            const res = await axios.delete(`http://localhost:8080/tests/${_id}`, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                    'Authorization': token,
                }
            })
            console.log(res)
            return res
        } catch (error) {
            throw error;
        }
    })