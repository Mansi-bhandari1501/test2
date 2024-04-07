import React, {useEffect, useState} from "react"
import Skeleton, { SkeletonTheme } from "react-loading-skeleton"
import "./card.css"
import { Link, NavLink } from "react-router-dom"
import SignUpImg from "../../assets/hello.jpg"
import Rating from '@mui/material/Rating';
import { CardContent, CardMedia } from "@mui/material"
const Cards = ({Item}) => {
console.log(Item)
    const [isLoading, setIsLoading] = useState(true)
    // console.log(Item?.student?.map((i) => i))
console.log(Item?.student)
// const Photos = Item.student;
// console.log(Photos)
    useEffect(() => {
        setTimeout(() => {
            setIsLoading(false)
        }, 0)
    }, []) 

    return <>
    {
        isLoading
        ?
        <div className="cards">
           <SkeletonTheme color="#202020" highlightColor="#444">
                <Skeleton height={300} duration={2} />
            </SkeletonTheme>
        </div>
        :
        <NavLink to= {`/product/${Item._id}`} style={{textDecoration:"none", color:"white"}}>
            <div className="cards">
            {
            Item?.coverimage?.map((i) => (
              <img src={`http://localhost:8080/${i}`} alt="" style={{width: '500px'}}/>
            ))
            }
                {/* <img className="cards__img" src= {Item.coverimage} alt="hello" /> */}
                {/* <CardContent sx={{display: "flex", flexDirection: "column", width: '100%', alignItems: 'center', justifyContent: 'space-around', padding: '0'}}>
          {
            photos?.map((i) => (
              <img className="cards__img" src={``} alt="" style={{width: '170px'}}/>
            ))
            } */}
                {/* </CardContent> */}
                <div className="cards__overlay">
                    <div className="card__title">{Item?.title}</div>
                    <div className="card__runtime">
                        {Item?.Author}
                       
                        {/* {movie?movie.release_date:""} */}
                        {/* <span className="card__rating">{5}<i className="fas fa-star" /></span> */}
                        <Rating className="card__rating" name="read-only" value={5} readOnly />
                    </div>
                    <div className="card__description">{Item?.description}</div>
                </div>
            </div>
        // </NavLink>
    }
    </>
}

export default Cards