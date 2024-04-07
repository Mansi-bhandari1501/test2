

import React, { useState } from 'react';
// import {GiCursedStar} from "react-icons/gi"


// import "./Course.scss";



import Product from "../Json";

import { useNavigate } from "react-router-dom";
import Pagination from '../Pagination';
import Cards from '../card/card';





 const AllCards = () => {

  const [currentPage,setCurrentPage] = useState(1)
  const [postsPerPage,setPostsPerPage] = useState(8)


  const lastPostIndex = currentPage * postsPerPage  
  const firstPostIndex = lastPostIndex - postsPerPage  

  const currentPosts = Product.slice(firstPostIndex,lastPostIndex)



  let navigate = useNavigate();

 
  return <div className="shop-by-category">

    <div className='headv'> 
    
      <h3>Courses Peovided</h3>
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
