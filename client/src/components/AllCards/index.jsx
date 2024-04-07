

import React, { useEffect, useState } from 'react';
// import {GiCursedStar} from "react-icons/gi"


// import "./Course.scss";



import Product from "../Json";

import { useNavigate } from "react-router-dom";
import Pagination from '../Pagination';
import Cards from '../card/card';
import { useDispatch, useSelector } from "react-redux";
import { fetchPost } from '../../features/product/productAction';



const AllCards = () => {
   const user = useSelector((state) => state.user);
   const products = useSelector((state) => state.product.products);
   const dispatch = useDispatch();
console.log(products)
  const [currentPage,setCurrentPage] = useState(1)
  const [postsPerPage,setPostsPerPage] = useState(6)


  const lastPostIndex = currentPage * postsPerPage  
  const firstPostIndex = lastPostIndex - postsPerPage  

  const currentPosts = products.slice(firstPostIndex,lastPostIndex)



  let navigate = useNavigate();

  useEffect(() => {
    const token = user.userToken;
   console.log(token)
    dispatch(fetchPost({token}));
  }, [dispatch]);
  return <div className="shop-by-category">

    <div className='headv'> 
    
      <h3>Courses Provided</h3>
      {/* <GiCursedStar/> */}
     
    </div>

    <div className="categories">

      {
        currentPosts.map((Item) => {
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

    <Pagination totalPosts={Product.length}
    postsPerPage={postsPerPage}
    currentPage={currentPage}
    setCurrentPage={setCurrentPage}
    
    />
   
  </div>
 
};
export default AllCards;
