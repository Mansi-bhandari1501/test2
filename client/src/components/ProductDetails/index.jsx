import React, { useEffect } from 'react'
import { useNavigate, useParams } from 'react-router'
import { useState } from 'react';
import DATA from '../Json';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPost, fetchSingleTest } from '../../features/product/productAction';
import { Link } from 'react-router-dom';
import { Button } from '@mui/material';
import Arrow from '@mui/icons-material/ArrowBackIosNew';
import Header from '../Navbar';
// import {addItem, delItem} from '../redux/actions/index'
// import "./style.css";
const ProductDetail = () => {
    const userid = useParams();
    console.log(userid.id)
    const _id =userid.id;
    // const proDetail = DATA.filter(x=>x.id == userid)
    // const product = proDetail[0];
    // console.log(proDetail);

    // We need to store useDispatch in a variable
    const dispatch = useDispatch()
    const products = useSelector((state) => state.product.products);
    console.log(products)
    const question =products[0].questionArray
    console.log(question)
     const user = useSelector((state) => state.user);
    

     const navigate = useNavigate();
     // const location = useLocation();
     const handleClick = async () => {
         console.log("GO TO HOME")
         // navigate(location.state || "/");
         navigate("/home");
     }
     useEffect(() => {
       const token = user.userToken;
       console.log(token)
       dispatch(fetchSingleTest({token,_id}));
      }, [dispatch]);
   
      const [currentQuestion, setCurrentQuestion] = useState(0);
      const [showScore, setShowScore] = useState(false);
      const [score, setScore] = useState(0);
      const handleAnswerButtonClick = (isCorrect) => {
        if (isCorrect === true) {
          setScore(score + 1);
        }
    
        const nextQuetions = currentQuestion + 1;
        if (nextQuetions < question.length) {
          setCurrentQuestion(nextQuetions);
        } else {
          setShowScore(true);
        }
      };
    console.log(question[currentQuestion].options)
    const options = question[currentQuestion].options
    console.log(options[0].option)
      return (
        <>

        <div className='quizapp'>
          <h1 className="header">Quiz</h1>
          <div className="app" >
            {showScore ? (
              <div className="score-section">
                You scored {score} out of {question.length}
                {/* <Link to=("/home")>Home</Link> */}
                <Button
              onClick={handleClick}
            sx={{
                bgcolor: "#fc6f92 ",
                color: "white",
                padding: "12px",
                borderRadius: "15px",
                textTransform: "none",
                fontSize:"16px",
                marginTop:"20px",
               border:"0.01px solid grey",
                "&:hover": {
                    backgroundColor: "#ff8fad",
                }
            }}
                startIcon={<Arrow sx={{ height: "12px" }}
                    />}>
                Go back to home  
            </Button>
              </div>
            ) : (
              <>
                <div className="question-section">
                  <div className="question-count">
                    <span>Question {currentQuestion + 1}</span>
                    {question.length}
                  </div>
                  <div className="question-text">
                    {question[currentQuestion].questions}
                  </div>
                </div>
    
                <div className="answer-section">
                  {question[currentQuestion].options?.map((answerOptions,i) => (
                    <button className='btn-submit'
                      onClick={() =>
                        handleAnswerButtonClick(answerOptions.isCorrect)
                      }
                    >
                      {options[i]?.option}
                    </button>
                  ))}
                </div>
              </>
            )}
          </div>
        </div>
        </>
      );
    }
    
//     return (
//         <>
//         <div className="container" style={{backgroundColor:"blanchedalmond"}}>
//             {/* <div className="row">
//                 <div className="col-md-6 d-flex justify-content-center mx-auto product">
//                     <img src={product.img} alt={product.title}height="400px" />
//                 </div>
//                 <div className="col-md-6 d-flex flex-column justify-content-center">
//                     <h1 className="display-5 fw-bold">{product.title}</h1>
//                     <hr />
//                     <h2 className="my-4">${product.price}</h2>
//                     <p className="lead">{product.desc}</p>
//                     <button onClick={()=>handleCart(product)} className="btn btn-outline-primary my-5">{cartBtn}</button>
//                 </div>
//             </div> */}
         
//         </div>
//         </>
//     )
// }

export default ProductDetail