// import {
//   Box,
//   Button,
//   FormControl,
//   Input,
//   InputLabel,
//   Modal,
//   TextField,
//   Typography,
//   styled,
// } from "@mui/material";
// import React, { useEffect, useState } from "react";
// // import '../../pages/Dashboard/Dashboard.css'
// import { useDispatch, useSelector } from "react-redux";
// import InsertPhotoIcon from "@mui/icons-material/InsertPhoto";
// import { Stack } from "react-bootstrap";
// // import { addBooks } from '../../redux/slices/books/booksAction';
// import "./addBook.css"
// const AddBook = ({ hide }) => {
//   // const user = useSelector((state) => state?.login?.content?.response)
//   // const token = user?.token

//   const style = {
//     position: "absolute",
//     top: "50%",
//     left: "50%",
//     transform: "translate(-50%, -50%)",
//     width: 400,
//     bgcolor: "background.paper",
//     border: "2px solid #000",
//     boxShadow: 24,
//     p: 4,
//   };

//   const dispatch = useDispatch();
//   const [open, setOpen] = React.useState(false);
//   const [title, setTitle] = useState("");
//   const [category, setCategory] = useState("");
//   const [stock, setStock] = useState("");
//   const [description, setDescription] = useState("");

//   const handleOpen = () => setOpen(true);
//   const handleClose = () => setOpen(false);

//   console.log("djagdjgduweg", title);
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log("helloo");
//     //  dispatch(addBooks({title,stock,description,category}))
//   };

//   // const token = useSelector((state) => state.user.userToken)

//   // useEffect(() => {
//   //     dispatch(fetchBooks({ token }))
//   // }, [dispatch])

//   // const books = useSelector((state) => state.books.books.books)
//   //     e.preventDefault();
//   //     try {
//   //         console.log(inputs)
//   //         const formData = new FormData();
//   //         await formData.append("title", inputs.title);
//   //         await formData.append("author", inputs.author);
//   //         await formData.append("genre", inputs.genre);
//   //         await formData.append("quantity", inputs.quantity);

//   //         await formData.append("images", images);
//   //         for (let i = 0; i < images.length; i++) {
//   //             formData.append("images", images[i]);
//   //         }
//   //         // await dispatch(addBooks({formData, token}));
//   //         hide()
//   //     } catch (err) {
//   //         console.log(err);
//   //     }
//   // };

//   return (
//     <>
//       <Typography
//         sx={{
//           fontSize: "25px",
//           fontFamily: "system-ui",
//           marginLeft: "45vw",
//           padding: "20px",
//         }}
//       >
//         BOOKS
//       </Typography>
//       <Button
//         sx={{ marginLeft: "100px", border: "1px solid blue" }}
//         onClick={handleOpen}
//       >
//         Add Books
//       </Button>
//       <Modal
//         open={open}
//         onClose={handleClose}
//         aria-labelledby="modal-modal-title"
//         aria-describedby="modal-modal-description"
//       >
//         <Box sx={style}>
//           <form onSubmit={handleSubmit}>
//             <Stack sx={{ flexDirection: "column", gap: "20px" }}>
//               <Typography>Add New Book</Typography>
//               <input
//                 type="text"
//                 className="form-control"
//                 placeholder="Enter new title"
//                 value={title}
//                 onChange={(e) => setTitle(e.target.value)}
//               />
//               <input
//                 type="text"
//                 className="form-control"
//                 placeholder="Enter new stock"
//                 value={stock}
//                 onChange={(e) => setStock(e.target.value)}
//               />
//               <input
//                 type="text"
//                 className="form-control"
//                 placeholder="Enter new category"
//                 value={category}
//                 onChange={(e) => setCategory(e.target.value)}
//               />
//               <input
//                 type="text"
//                 className="form-control"
//                 placeholder="Enter new Description"
//                 value={description}
//                 onChange={(e) => setDescription(e.target.value)}
//               />
//             </Stack>

//             <button className="submitBTN" type="submit">
//               Submit
//             </button>
//           </form>
//         </Box>
//       </Modal>
//     </>
//   );
// };

// export default AddBook;
import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import ModeEditIcon from "@mui/icons-material/ModeEdit";
import DialogTitle from "@mui/material/DialogTitle";
import MediaIcon from "@mui/icons-material/ImageOutlined";

import {
  Box,
  Divider,
  FormControl,
  MenuItem,
  Select,
  Typography,
} from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";

export default function FormDialog() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  //   const [input,setInput] = useState({
  //     firstName:"",
  //     lastName:"",
  //     additionalName:"",
  //     pronoun:"",
  //     headline:"",
  //     position:"",
  //     industry:"",
  //     country:"",
  //     city:"",

  // })
  const [firstName, setFirstname] = useState();

  const user = useSelector((state) => state.user.userInfo);
  // const userId = user._id;
  // const handleSubmit = (e) => {
  //   // e.preventDefault();
  //   // let formData = new FormData();
  //   // // console.log(input.title)
  //   // formData.append('firstName',input.firstName);
  //   // formData.append('lastName',input.lastName);
  //   // formData.append('additionalName',input.additionalName);
  //   // formData.append('pronoun',input.pronoun);
  //   // formData.append('headline',input.headline);
  //   // formData.append('position',input.position);
  //   // formData.append('industry',input.industry);
  //   // formData.append('country',input.country);
  //   // formData.append('city',input.city);
  //   // formData.append('userid',user._id);
  //   const data = {
  //     firstName,
  //   };
  //   console.log(data);
  //   handleClose();
  //   // dispatch(userDetails(data,userId));
  // };
  const [inputs, setInputs] = useState({ title: "", author: "", quantity: '', genre: '' });
  const [images, setImages] = useState([]);
  const dispatch = useDispatch();


  const handleImage = (e) => {
      setImages(e.target.files);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
        console.log(inputs)
        const formData = new FormData();
        await formData.append("title", inputs.title);
        await formData.append("author", inputs.author);
        await formData.append("genre", inputs.genre);
        await formData.append("quantity", inputs.quantity);

        await formData.append("images", images);
        for (let i = 0; i < images.length; i++) {
            formData.append("images", images[i]);
        }
        // await dispatch(addBooks({formData, token}));
        // hide()()
        handleClose();
    } catch (err) {
        console.log(err);
    }
};

  return (
    <React.Fragment>
      {/* <Button variant="outlined" onClick={handleClickOpen}> */}
      <ModeEditIcon onClick={handleClickOpen} />

      <Dialog
        open={open}
        onClose={handleClose}
        PaperProps={{
          component: "form",
          onSubmit: (event) => {
            handleSubmit();
          },
        }}
      >
        {/* <DialogTitle>Subscribe</DialogTitle> */}

        <DialogContent sx={{ width: "500px" }}>
          {/* <DialogContentText>
          
          </DialogContentText> */}
          <FormControl sx={{ width: "100%" }} onSubmit={handleSubmit}>
            <label>First Name</label>
            <TextField
              autoFocus
              required
              margin="dense"
              id="name"
              name="first-name"
              // label="Email Address"
              type="text"
              fullWidth
              variant="outlined"
              onChange={(e) => {
                setFirstname(e.target.value);
              }}
            />
            <label>Last Name</label>
            <TextField
              autoFocus
              required
              margin="dense"
              // id="name"
              name="Last-name"
              // label="Email Address"
              type="text"
              fullWidth
              variant="outlined"
              // onChange={(e) => {setInput({ ...input, lastName: e.target.value })}}
            />
            <label>Additional Name</label>
            <TextField
              autoFocus
              margin="dense"
              // id="name"
              name="Additional-name"
              // label="Email Address"
              type="text"
              fullWidth
              variant="outlined"
              // onChange={(e) => {setInput({ ...input, additionalName: e.target.value })}}
            />
            <label>Pronoun</label>
            <Select
              displayEmpty
              value={0}
              // onChange={handleChange}
            >
              <MenuItem value={0}>Please Select</MenuItem>
              <MenuItem value={10}>She/Her</MenuItem>
              <MenuItem value={20}>He/Him</MenuItem>
              <MenuItem value={30}>They/Them</MenuItem>
            </Select>
            <Typography>Let others know how to refer to you.</Typography>
            <Typography>Learn more about gender pronouns.</Typography>

            <label>Headline</label>
            <TextField
              margin="dense"
              id="name"
              name="Head-line"
              // label="Email Address"
              type="text"
              fullWidth
              variant="outlined"
              // onChange={(e) => {setInput({ ...input, headline: e.target.value })}}
            />

            <label>Current Position</label>
            <Typography>Position*</Typography>

            <Select
              // value={}

              displayEmpty
              // onChange={handleChange}
            >
              <MenuItem>Please Select</MenuItem>
              <MenuItem>Full-Stack developer</MenuItem>
              <MenuItem>SEO developer</MenuItem>
              {/* <MenuItem >They/Them</MenuItem> */}
            </Select>
            <Button variant="standard" onClick={handleClickOpen}>
              +Add new Position
            </Button>
            <Box>
              <input type="checkbox" label="Show current company in my intro" />
              <label>Show current company in my intro</label>
            </Box>
            {/* <Checkbox label="Show current company in my intro" defaultChecked /> */}

            <Typography>industry*</Typography>
            <TextField
              margin="dense"
              name="industry"
              // label="Email Address"
              type="text"
              fullWidth
              variant="outlined"
            />
            <Typography>Learn more about industry options</Typography>

            <label>Education</label>
            <Typography>School*</Typography>

            <Select
              // value={}

              displayEmpty
              // onChange={handleChange}
            >
              <MenuItem>Please Select</MenuItem>
              <MenuItem>Full-Stack developer</MenuItem>
              <MenuItem>SEO developer</MenuItem>
              {/* <MenuItem >They/Them</MenuItem> */}
            </Select>
            <Button variant="standard" onClick={handleClickOpen}>
              +Add new education
            </Button>
            <Box>
              <input type="checkbox" />
              <label>Show current company in my intro</label>
            </Box>
            <label>Location</label>
            <Typography>Country/Region*</Typography>

            <TextField
              margin="dense"
              name="country"
              // label="Email Address"
              type="text"
              fullWidth
              variant="outlined"
            />
            <label>City</label>
            <TextField
              margin="dense"
              name="country"
              // label="Email Address"
              type="text"
              fullWidth
              variant="outlined"
            />
            <h3>Contact info</h3>
            <Typography>
              Add or edit your profile URL, email, and more
            </Typography>
            <Button variant="standard" onClick={handleClickOpen}>
              Edit contact info
            </Button>
            <Button
              component="label"
              role={undefined}
              variant="standard"
              tabIndex={-1}
              sx={{ width: "10px" }}
              startIcon={<MediaIcon />}
              // onClick={handleFileUpload}
            />
            <input
              type="file"
              multiple="multiple"
              id="post_images"
              class="custom-file-input"
              name="post_images"
              onChange={(e) => {
                setImages(e.target.files);
              }}
            />
          </FormControl>
        </DialogContent>
        <DialogActions>
          <Divider />
          <Button onClick={handleClose}>Cancel</Button>
          <Button type="submit">Save</Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}
