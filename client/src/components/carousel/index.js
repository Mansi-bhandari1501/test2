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

    const [popularMovies, setPopularMovies] = useState([])

    useEffect(() => {
        fetch("https://api.themoviedb.org/3/movie/popular?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US")
            .then(res => res.json())
            .then(data => setPopularMovies(data.results))
    }, [])

    return (
        <>
            <div className="poster" style={{ margin: "20px",marginBottom:"80px" ,height:"60vh"}}>
                <Carousel
                    showThumbs={false}
                    autoPlay
                    // transitionTime={1}
                    infiniteLoop={true}
                    showStatus={false}
                    // emulateTouch={true}
                    
                >
                    <Stack>

                        <img src={Image1} alt='' style={{ height:"65vh"}}/>

                    </Stack>

                    <Stack>

                        <img src={Image} alt='' style={{  height:"65vh"}}/>

                    </Stack>
                </Carousel>

                {/* <MovieList /> */}
            </div>
        </>
    )
}

export default CarouselCompnt