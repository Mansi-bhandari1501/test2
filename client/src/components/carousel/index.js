import React, { useEffect, useState } from "react"
import "./home.css"
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import { Link } from "react-router-dom";
import Cards from "../card/card";
import AllCards from "../AllCards";
// import MovieList from "../../components/movieList/movieList";
import Image from "../../assets/Quizzes-By-Class.jpg"
import Image1 from "../../assets/img1.jpg"
import { Stack } from "@mui/material";
const CarouselCompnt = () => {


 

    return (
        <>
            <div className="poster" style={{ margin: "20px",marginBottom:"80px" ,height:"75vh"}}>
                <Carousel
                    showThumbs={false}
                    autoPlay
                    // transitionTime={1}
                    infiniteLoop={true}
                    showStatus={false}
                    emulateTouch={true}
                    
                >
                    <Stack>

                        <img src={Image1} alt='' style={{ height:"75vh"}}/>

                    </Stack>

                    <Stack>

                        <img src={Image} alt='' style={{  height:"75vh"}}/>

                    </Stack>
                </Carousel>

                {/* <MovieList /> */}
            </div>
        </>
    )
}

export default CarouselCompnt