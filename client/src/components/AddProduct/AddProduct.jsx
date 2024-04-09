import Card from "@mui/material/Card";
import * as React from "react";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
// import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import { useState } from "react"; // Import useState hook
import Typography from "@mui/material/Typography";
import { Box, Stack, TextField } from "@mui/material";
import Header from "../Navbar";
import { useDispatch, useSelector } from "react-redux";
import { createPost } from "../../features/product/productAction";
import { useNavigate } from "react-router";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AddBook = () => {
const navigate = useNavigate();
  const user = useSelector((state) => state.user);
console.log(user)
  const VisuallyHiddenInput = styled("input")({
    clip: "rect(0 0 0 0)",
    clipPath: "inset(50%)",
    height: 1,
    overflow: "hidden",
    position: "absolute",
    bottom: 0,
    left: 0,
    whiteSpace: "nowrap",
    width: 1,
  });

const dispatch = useDispatch()
  const [newUser, setNewAuthor] = useState({
    quizTitle: "",
    time: "",
    category: "",
    description: "",
  });
  const notify = () => toast("Test Created");
// const[image]
  const handleChange = (e) => {
    setNewAuthor({
      ...newUser,
      [e.target.name]: e.target.value,
    });
  };

  // const handlePhoto = (e) => {
  //   setNewAuthor({ ...newUser, coverimage: e.target.files[0] });

  // };
console.log(newUser)
  const token = user.userToken;
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(token)
  
     dispatch(createPost({newUser,token}))
     toast.success("Test created !");
    //  navigate('/dashboard')

  };

  return (
    <Box  bgcolor={"#F8FAFB"}>
      {/* <TopBar /> */}
      <Header/>
      <Stack className="addbookMain" flexDirection={"row"} marginTop={"50px"}>
        <Stack width={"0"}>
          {/* <SideBar /> */}
        </Stack>

        <Stack
          flexGrow={"1"}
          bgcolor={"#F8FAFB"}
          justifyContent={"center"}
          alignItems={"center"}
        >
          <Card
            sx={{
              display: "flex",
              flexDirection: "column",
              width: "95%",
              height: "100%",
              justifyContent: "center",
              alignItems: "center",
              marginTop:"10px"
            }}
          >
            <Stack width={"95%"} height={"96%"} padding={"10px"}>
              <Typography
                style={{
                  fontFamily: "Poppins",
                  fontWeight: "600",
                  fontSize: "25px",
                  marginBottom: "1%",
                  textAlign: "center",
                }}
              >
                ADD TEST
              </Typography>

              <form onSubmit={handleSubmit} encType="multipart/form-data">
                <Typography

                  style={{
                    fontFamily: "Poppins",
                    fontWeight: "600",
                    fontSize: "20px",
                    color: "GrayText",
                    marginBottom: "0.5%",
                  }}
                >
                  Title
                </Typography>
                <TextField
                  sx={{
                    width: "100%",
                    marginBottom: "2%",
                    fontFamily: "Poppins",
                    fontSize: "14px", 
                  }}
                  placeholder="Enter the book's title"
                  name="quizTitle"
                  value={newUser.quizTitle}
                  onChange={handleChange}
                />
               
                <Typography

                  style={{
                    fontFamily: "Poppins",
                    fontWeight: "600",
                    fontSize: "20px",
                    color: "GrayText",
                    marginBottom: "0.5%",
                  }}
                >
                  Category
                </Typography>
                <TextField
                  sx={{
                    width: "100%",
                    marginBottom: "2%",
                    fontFamily: "Poppins",
                    fontSize: "1px",
                  }}
                  placeholder="Enter the book's category"
                  name="category"
                  value={newUser.category}
                  onChange={handleChange}
                ></TextField>
                <Typography
                
                  style={{
                    fontFamily: "Poppins",
                    fontWeight: "600",
                    fontSize: "20px",
                    color: "GrayText",
                    marginBottom: "0.5%",
                  }}
                >
                  Description
                </Typography>
                <TextField
                  sx={{
                    width: "100%",
                    marginBottom: "2%",
                    fontFamily: "Poppins",
                    fontSize: "1px",
                  }}
                  placeholder="Enter the book's description"
                  name="description"
                  value={newUser.description}
                  onChange={handleChange}
                ></TextField>
                <Typography
                  style={{
                    fontFamily: "Poppins",
                    fontWeight: "600",
                    fontSize: "20px",
                    color: "GrayText",
                    marginBottom: "0.5%",
                  }}
                >
                  Duration
                </Typography>
                <TextField
                  sx={{
                    width: "100%",
                    marginBottom: "2%",
                    fontFamily: "Poppins",
                    fontSize: "1px",
                  }}
                  placeholder="Enter the test duration"
                  name="time"
                  value={newUser.time}
                  onChange={handleChange}
                ></TextField>
                <Stack>
                  <Button
                    type="submit"
                    style={{
                      fontWeight: "600",
                      width: "20%",
                    }}
                    variant="contained"
                    color="success"
                  >
                    SUBMIT
                  </Button>
                </Stack>
              </form>
            </Stack>
          </Card>
        </Stack>
      </Stack>
      <ToastContainer />
    </Box>
     
  );
};

export default AddBook;
