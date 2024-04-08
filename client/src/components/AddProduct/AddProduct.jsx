// import SideBar from "../component/SideBar";
// import TopBar from "../component/TopBar";
import Card from "@mui/material/Card";
import * as React from "react";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import { useState } from "react"; // Import useState hook
import axios from "axios"; // Import axios library
import Typography from "@mui/material/Typography";
import { Box, Stack, TextField } from "@mui/material";
import Header from "../Navbar";
import { useDispatch, useSelector } from "react-redux";
import { createPost } from "../../features/product/productAction";
import { useNavigate } from "react-router";


const AddBook = () => {
const navigate = useNavigate();
  const user = useSelector((state) => state);
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

  ////////////////////////////////////////////////////////////////////////////////////////////////////////
const dispatch = useDispatch()
  const [newUser, setNewAuthor] = useState({
    title: "",
    author: "",
    category: "",
    description: "",
  });
// const[image]
  const handleChange = (e) => {
    setNewAuthor({
      ...newUser,
      [e.target.name]: e.target.value,
    });
  };

  const handlePhoto = (e) => {
    setNewAuthor({ ...newUser, coverimage: e.target.files[0] });

  };

  const token = user.userToken;
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(newUser)
    // const formData = new FormData();
    // await formData.append("title", newUser.title);
    // await formData.append("author", newUser.author);
    // await formData.append("category", newUser.category);
    // await formData.append("description", newUser.description);
    // await formData.append("image", newUser.coverimage[0]);
    //  console.log(formData)
     dispatch(createPost({newUser,token}))
     navigate('/dashboard')
    // try {
    //   const res = await axios.post(
    //     "http://localhost:8080/book/addbook",
    //     formData
    //   );
    //   console.log(res);
    // } catch (err) {
    //   console.log(err);
    // }
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
                    fontSize: "14px", // Set the font size appropriately
                  }}
                  placeholder="Enter the book's title"
                  name="title"
                  value={newUser.title}
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
                  Author
                </Typography>
                <TextField
                  sx={{
                    width: "100%",
                    marginBottom: "2%",
                    fontFamily: "Poppins",
                    fontSize: "1px",
                  }}
                  placeholder="Enter the book's author"
                  name="author"
                  value={newUser.author}
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
               
                <Stack>
                  {/* <Button
                    style={{
                      marginBottom: "2%",
                      width: "20%",
                      textTransform: "none",
                      fontWeight: "600",
                    }}
                    component="label"
                    role={undefined}
                    variant="contained"
                    tabIndex={-1}
                    startIcon={<CloudUploadIcon />}
                  >
                    Upload Cover Image
                    <VisuallyHiddenInput
                      type="file"
                      accept=".png, .jpg, .jpeg"
                      name="photo"
                      onChange={handlePhoto}
                    />
                  </Button> */}

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
    </Box>
  );
};

export default AddBook;
