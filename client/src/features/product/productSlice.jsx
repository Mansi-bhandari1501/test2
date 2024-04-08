import { createSlice} from "@reduxjs/toolkit";
import {  current} from "@reduxjs/toolkit";
// import { acceptConnection, createConnections, fetchActiveConnection, fetchPendingConnection, fetchReceivedConnection, rejectConnection } from "./connectionAction";
import { createPost, deletePost, fetchPost, fetchSingleTest } from "./productAction";
// import Received from './../../components/Invitation/received';

const initialState ={
    products:[],
    isLoading:true,
    error:null
}

export const productSlice = createSlice({
    name:'product',
    initialState,
    reducers:{ addNewUser: (state, action) => {
        state.products.push(action.payload)
      }},

    extraReducers:(builder)=>{
        // fetchPost
        builder.addCase(fetchPost.pending,(state)=>{
            state.isLoading=true;
        })
        builder.addCase(fetchPost.fulfilled,(state,action)=>{
            state.isLoading=false;
            state.error=null
            console.log(action.payload)
            console.log( state.products)
            state.products=action.payload
            
            // const prevPosts = current(state.products);
            // console.log('prevPosts',prevPosts);
            // // const prevPosts =state.products
            // const newPosts = action.payload.posts
            // console.log(newPosts,[...prevPosts,...newPosts]);
            // // state.products= action.payload.posts;
            // state.products.push(...action.payload?.posts)
            // console.log(state.products)
        })
        builder.addCase(fetchSingleTest.rejected,(state,action)=>{
            state.isLoading=false
            state.error= action.error.message
        })
        builder.addCase(fetchSingleTest.pending,(state)=>{
            state.isLoading=true;
        })
        builder.addCase(fetchSingleTest.fulfilled,(state,action)=>{
            state.isLoading=false;
            state.error=null
            console.log(action.payload)
            console.log( state.products)
            state.products.push(action.payload)
         
        })
        builder.addCase(deletePost.rejected,(state,action)=>{
            state.isLoading=false
            state.error= action.error.message
        })
        builder.addCase(deletePost.pending,(state)=>{
            state.isLoading=true;
        })
        builder.addCase(deletePost.fulfilled,(state,action)=>{
            state.isLoading=false;
            state.error=null
            console.log(action.payload)
            console.log( state.products)
            // state.products.push(action.payload)
            // action.payload.favorites.filter(word => word != action.favorite)
            // if(action.payload.connection.status === 'rejected'){
            //     const newReq = state.connections.filter((item) => {
            //          return item.sender !== action.payload.connection.sender
            //     })
            //     state.requested = newReq
            //     console.log("NEWREQQQ",newReq)
            // }
        })
        builder.addCase(fetchPost.rejected,(state,action)=>{
            state.isLoading=false
            state.error= action.error.message
        })

        // createPost
        builder.addCase(createPost.pending,(state)=>{
            state.isLoading=true;
        })
        builder.addCase(createPost.fulfilled,(state,action)=>{
            state.isLoading=false
            state.error=null
            // state.products.push(action.payload.data.post);
        })
        builder.addCase(createPost.rejected,(state,action)=>{
            state.isLoading=false
            state.error= action.error.message
        })
      
    },
});
export default productSlice.reducer;