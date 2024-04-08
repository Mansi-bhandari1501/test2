

import React, { useEffect, useState } from 'react';
// import {GiCursedStar} from "react-icons/gi"


// import "./Course.scss";



import Product from "../Json";

import { useNavigate } from "react-router-dom";
import Pagination from '../Pagination';
import Cards from '../card/card';
import { useDispatch, useSelector } from "react-redux";
import { fetchPost } from '../../features/product/productAction';
import Header from '../Navbar';
import Footer from '../Footer';



const AllCards = () => {
  const products = useSelector((state) => state.product.products);
  console.log(products)
   const user = useSelector((state) => state.user);
   const dispatch = useDispatch();
   const [currentPage,setCurrentPage] = useState(1)
   const [postsPerPage,setPostsPerPage] = useState(3)
   
   
   const lastPostIndex = currentPage * postsPerPage  
   const firstPostIndex = lastPostIndex - postsPerPage  
   
   const currentPosts = products.slice(firstPostIndex,lastPostIndex)
   
   console.log(currentPosts)
   
   let navigate = useNavigate();
   
   useEffect(() => {
     const token = user.userToken;
     console.log(token)
     dispatch(fetchPost(token));
    }, [dispatch]);
    return <>
    
    <div className="shop-by-category" style={{margin:"20px",marginLeft:"100px"}}>

    <div className='headv'> 
    
      <h1 style={{color:"black"}}>Test Available</h1>
      {/* <GiCursedStar/> */}
     
    </div>

    <div className="categories">
    {currentPosts.length === 0 && <>No new Test's</>}
      {
        currentPosts && currentPosts.length && currentPosts.map((Item) => {
          return (
            <Cards
            key={Item.userid}
            onClick={() => navigate(Item.component)}
            Item={Item}
            Image={Item.student}
            />
          )
        }

       
        )
      }





    </div>

    <Pagination totalPosts={products.length}
    postsPerPage={postsPerPage}
    currentPage={currentPage}
    setCurrentPage={setCurrentPage}
    
    />
   
  </div>
  <div style={{marginTop:"150px"}}>


  <Footer/>
  </div>
    </>
 
};
export default AllCards;
