// import React, { useState } from 'react'
// import TextField from "@mui/material/TextField";
// import Button from "@mui/material/Button";
// import { useNavigate } from "react-router-dom";
// import "./sign-up.css";
// import {
//     // FormControl,
//     IconButton,
//     InputAdornment,
//     // InputLabel,
//     OutlinedInput,
// } from "@mui/material";
// import { NavLink } from "react-router-dom";
// // import Logo from "../../assets/linkedIn_logo.png";
// import { registerUser } from '../../features/User/userAction';
// import { useDispatch } from 'react-redux';


// const SignupComponent = () => {
//     const dispatch = useDispatch();
//       // const [username, setUsername] = useState("")
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const data = {
//     email:email,
//     password:password
//   }
//   console.log(data)
//   // const [phone,setPhone] =  useState("")
//   const [showPassword, setShowPassword] = React.useState(false);

//   const handleClickShowPassword = () => setShowPassword((show) => !show);

//   const handleMouseDownPassword = (event) => {
//     event.preventDefault();
//   };
// //   const { } = useSelector(
// //     (state) => state.user
// //   );
//   const navigate = useNavigate();
//   // form function
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log(email,password)
//     dispatch(registerUser(data))
//     .unwrap()
//       .then((res) => {
//         console.log(res,"ghgrhtrh");
//         console.log("hello");
//         console.log(res.status)
//         if (res.status === 200 || res.status === 201) {
//           navigate("/login");
//         }
//       })
//       .catch((err) => {
//         console.log(err,"reth")
//         alert(err);
//         console.log("error");
//         console.log("err", err);
//       });
//   };
// //   const handleSubmit = async (e) => {
// //     e.preventDefault();
// //     try {
// //         dispatch(registerUser(email,password))
// //     //   const res = await axios.post("http://localhost:8080/users/register", {
// //     //     email,
// //     //     password,
// //     //   });
// //     //   console.log(email, password);
// //     //   if (res && res.data.success) {
// //     //     // toast.success(res.data && res.data.message);
// //     //     alert(res.data && res.data.message);
// //         // navigate("/login");
// //     //   } else {
// //     //     // toast.error(res.data.message);
// //     //     alert(res.data.message);
// //     //   }
// //     } catch (error) {
// //       console.log(error);
// //       // toast.error("Something went wrong");
// //       alert("Something went wrong");
// //     }
// //     // console.log(process.evn.REACT_APP_API)
// //   };

//     return (
//         <div className="signup-page">
//             {/* <IconMenu className="logo" /> */}
//             <div className="Logo">
//                 {/* <img src={Logo} alt="logo" className="logo"></img> */}
//             </div>
//             <p className="signup-heading">
//                 Make the most of your professional life
//             </p>
//             <section className="signun-container ">
//                 <div className="signup-data">
//                     {/* <h3 className="signup-heading">  Sign up</h3> */}
//                     <form className="signup-form"  onSubmit={handleSubmit}>

//                         <div className="signup-inputs">
//                             <label>Email or phone number</label>

//                             <TextField
//                                 className="inputemail"
//                                 size="small"
//                                 inputProps={{
//                                     style: {
//                                         padding: "5px",
//                                     },
//                                 }}
//                                 variant="outlined"
//                                 // style={{width: '50px'}}!!!
//                                 onChange={(e) => setEmail(e.target.value)}
//                             />
//                             <label>Password (6+ characters)</label>

//                             <OutlinedInput
//                                 className="input-password"
//                                 size="small"
//                                 onChange={(e) => setPassword(e.target.value)}
//                                 inputProps={{
//                                     style: {
//                                         padding: "0px",
//                                     },
//                                 }}
//                                 type={showPassword ? "text" : "password"}
//                                 endAdornment={
//                                     <InputAdornment position="end">
//                                         <IconButton
//                                             aria-label="toggle password visibility"
//                                             onClick={handleClickShowPassword}
//                                             onMouseDown={handleMouseDownPassword}
//                                             sx={{ fontSize: "16px", color: "#0A66C2" }}
//                                         // edge="end"
//                                         >
//                                             {showPassword ? "Hide" : "show"}
//                                         </IconButton>
//                                     </InputAdornment>
//                                 }
//                             // label="Password"
//                             />
//                         </div>
//                         <p className="terms-policy">
//                             By clicking Agree & Join or Continue, you agree to the LinkedIn{" "}
//                             <span style={{ color: "blue" }}>
//                                 User Agreement, Privacy Policy
//                             </span>{" "}
//                             and <span style={{ color: "blue" }}>Cookie Policy</span>.
//                         </p>
//                         <input
//                             className="btn-submit"
//                             type="submit"
//                             // onClick={addData}
//                             value="Agree & Join"
//                             style={{ fontSize: "16px" }}
//                         />
//                         {/* <Button className="btn-submit" onSubmit={handleSubmit} sx={{ borderRadius: "50px" }} variant="contained">Agree & Join</Button> */}
//                     </form>
//                     <div className="choice_seprator">
//                         <p className="or"> or </p>
//                     </div>
//                     <div
//                         style={{
//                             display: "flex",
//                             justifyContent: "center",
//                             width: "100%",
//                         }}
//                     >
//                         <Button
//                             sx={{
//                                 width: "90%",
//                                 borderRadius: "50px",
//                                 border: "1px solid #666666",
//                                 textTransform: "capitalize",
//                             }}
//                             disabled={false}
//                             variant="outlined"
//                             className="btn-google-signin"
//                         >
//                             <div
//                                 style={{
//                                     width: "100%",
//                                     display: "flex",
//                                     gap: "10px",
//                                     alignItems: "center",
//                                     justifyContent: "center",
//                                 }}
//                             >
//                                 <span>
//                                     <img
//                                         height="19"
//                                         width="19"
//                                         paddding="15 0 0 0"
//                                         src="https://static-00.iconduck.com/assets.00/google-icon-2048x2048-czn3g8x8.png"
//                                         alt="google-logo"
//                                     />
//                                 </span>
//                                 <p>Continue with Google</p>
//                             </div>
//                         </Button>
//                     </div>
//                     <p className="quote">
//                         Already on LinkedIn?{" "}
//                         <span>
//                             <NavLink
//                                 style={{ color: "#8344CC", textDecoration: "none" }}
//                                 to="/login"
//                             >
//                                 Sign-in
//                             </NavLink>
//                         </span>
//                     </p>
//                 </div>
//             </section>
//             <div className="getHelp">
//                 Looking to create a page for a business?{" "}
//                 <span style={{ color: "#8344CC" }}>Get help</span>
//             </div>

//         </div>
//     );
// }

// export default SignupComponent;


import { Box, FormControl, InputLabel, Paper, Select, Stack, Typography, MenuItem, InputBase, Button } from '@mui/material'
import React, { useState } from 'react'
// import CustomButton from '../../components/Button/CustomButton';
import SignUpImg from "../../assets/Signup.png"
import { NavLink, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { registerUser } from '../../features/User/userAction';
// import { registerUser } from '../../../feature/Auth/authAction';
const SignupPage = () => {

    const [role, setRole] = React.useState('');

    const dispatch = useDispatch();
    // const [username, setUsername] = useState("")
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");


    const data = {
      email:email,
      password:password,
      role:role
    }
    console.log(data)
    const handleChange = (event) => {
      setRole(event.target.value );
    };
// const [phone,setPhone] =  useState("")
const [showPassword, setShowPassword] = React.useState(false);

const handleClickShowPassword = () => setShowPassword((show) => !show);

// const handleMouseDownPassword = (event) => {
// event.preventDefault();
// };
//   const { } = useSelector(
//     (state) => state.user
//   );
const navigate = useNavigate();
// form function
const handleSubmit = (e) => {
e.preventDefault();
console.log(email,password)
dispatch(registerUser(data))
.unwrap()
  .then((res) => {
    console.log(res,"ghgrhtrh");
    console.log("hello");
    console.log(res.status)
    if (res.status === 200 || res.status === 201) {
      navigate("/");
    }
  })
  .catch((err) => {
    console.log(err,"reth")
    alert(err);
    console.log("error");
    console.log("err", err);
  });
};

  return (
    <Box sx={{width: '100%', height: "100vh", display: 'flex', justifyContent: 'center', alignItems: 'center', bgcolor: '#f9fafb'}}>

      <Paper sx={{width: '55vw', height: '590px', display: 'flex', alignItems: 'center', p: 3}} >
        <Box sx={{width: '50%', display: 'flex', alignItems: 'center', justifyContent:"center"}}>
        <img src={SignUpImg} alt='SignupPage' width={"90%"} />

        </Box>
        <Stack width={'50%'} alignItems={'flex-start'} justifyContent={'center'} >
            <Typography sx={{fontSize: '20px', fontWeight: 'bold', mb: 4}}>Create your Free Account</Typography>
            <FormControl sx={{mb: 3, width: '90%'}}>
        

        <InputLabel><Typography sx={{fontSize: '16px', fontWeight: 'bold'}}>Select your role</Typography></InputLabel>
        <Select
          id="demo-simple-select"
          placeholder='Role'
          value={role}
          label={"Select Your Role"}
          onChange={handleChange}
          sx={{
            bgcolor: '#faf9fb'
          }}
        >
          <MenuItem value={"user"}>User</MenuItem>
          <MenuItem value={"vendor"}>Vendor</MenuItem>
        </Select>
      </FormControl>
    
      <Typography sx={{fontSize: '16px', fontWeight: 'bold', mb: 1}}>Your Email</Typography>
        <InputBase 
            placeholder='Email'
            type='email'
            sx={{
                border: '1px solid #e5e7eb',
                bgcolor: '#faf9fb',
                width: '90%',
                borderRadius: '10px',
                p: '5px 10px',
                mb: 3
            }}
            onChange={(e) => setEmail(e.target.value)}


        />

<Typography sx={{fontSize: '16px', fontWeight: 'bold', mb: 1}}>Password</Typography>
        <InputBase 
            placeholder='Password'
            type='password'
            sx={{
                border: '1px solid #e5e7eb',
                bgcolor: '#faf9fb',
                width: '90%',
                borderRadius: '10px',
                p: '5px 10px',
                mb: 3
            }}
            onChange={(e) => setPassword(e.target.value)}


        />

{/* <Typography sx={{fontSize: '16px', fontWeight: 'bold', mb: 1}}>Confirm Password</Typography>
        <InputBase 
            placeholder='Confirm Password'
            type='password'
            sx={{
                border: '1px solid #e5e7eb',
                bgcolor: '#faf9fb',
                width: '90%',
                borderRadius: '10px',
                p: '5px 10px',
                mb: 3
            }}

        /> */}
        
            <Button onClick={(e) => {handleSubmit(e)}} color='primary' variant='contained' sx={{textTransform: 'none',borderRadius: '10px',fontSize: '16px', width: '90%', fontWeight: '500', boxShadow: 'none', mb: 4}}>Create Account</Button>
            <p className="quotes">
                Already have account?{" "}
                <span>
                    <NavLink
                        style={{ color: "#0a66c2", textDecoration: "none", fontWeight: 600 }}
                        to="/login"
                    >
                        Log In
                    </NavLink>
                </span>
            </p>
        </Stack>
      </Paper>
    </Box>
  )
}

export default SignupPage