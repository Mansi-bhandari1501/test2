import {
  Avatar,
  Box,
  Button,
  IconButton,
  InputAdornment,
  InputBase,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import axios from "axios";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import React, { useState } from "react";
import SearchIcon from "@mui/icons-material/SearchRounded";
import calender from "../../assets/calender.png";
import NotificationsIcon from "@mui/icons-material/Notifications";
import { Link, useNavigate } from "react-router-dom";
import { ReactComponent as HomeLogo } from "../../assets/utils/home-logo.svg";
import { ReactComponent as JobsLogo } from "../../assets/utils/jobs-logo.svg";
import { ReactComponent as MsgLogo } from "../../assets/utils/msg-logo.svg";
import { ReactComponent as NetworkLogo } from "../../assets/utils/network-logo.svg";
import { ReactComponent as NotificationLogo } from "../../assets/utils/notification-logo.svg";
// import { ReactComponent as BusinessLogo } from "../../assets/utils/business-logo.svg"
import "./header.css";
import { useSelector } from "react-redux";

const Header = () => {
  var today = new Date();
  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [isLoggedin, setIsLoggedin] = React.useState(false);
  const [search, setsearch] = useState();
  const [data, setdata] = useState([]);
  const [anchorE2, setAnchorE2] = React.useState(null);
  const open = Boolean(anchorEl);
  const open1 = Boolean(anchorE2);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClick1 = (event) => {
    setAnchorE2(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
    navigate("/dashboard")
  };
  const handleClose1 = () => {
    setAnchorE2(null);
  };
  const handleLogout = () => {
    console.log("Logoutttt");
    localStorage.removeItem("auth");
    localStorage.removeItem("persist:root");
    setIsLoggedin(false);
    navigate("/");
  };

  const fetchData = async () => {
    try {
      var url = `http://localhost:8080/tests/search?q=${search}`;

      // if (category) {
      //   url = url + `&category=${category}`
      // }
      // if (search) {
      //   url = url + `&search=${search}`
      // }
      const response = await axios.get(url);
      console.log("response.data.Info:", response);
      setdata(response.data.products);
      // setCount(Math.ceil(response.data.Count / size))
      // console.log('data to show', data[0]._id)
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const handleSearch = (e) => {
    e.preventDefault();
    setAnchorE2(e.currentTarget);
    fetchData();
  };
  var weekdays = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const user = useSelector((state) => state.user.userInfo);
  const userName = user.email;
  const userRole = user.role;

  console.log(userRole);
  var dayIndex = today.getDay();
  var dayName = weekdays[dayIndex];
  var date = today.getDate();
  var month = today.getMonth() + 1;
  var Month;
  Month = month < 10 ? "0" + month : month;
  var year = today.getFullYear();
  var todayDateString = dayName + ", " + date + "/" + Month + "/" + year;
  return (
    <Box
      sx={{
        backgroundColor: "#eeeeee",
        height: "8vh",
        width: "100vw",
        boxShadow: "revert-layer",
        zIndex: "1",
        marginTop: 0,
        borderColor: "ButtonHighlight",
        position: "sticky",
      }}
    >
      <Stack flexDirection={"row"} sx={{ justifyContent: "space-around" }}>
        {/* <Stack  flexDirection={'row'} sx={{gap:"",justifyContent:"space-around"}}> */}

        <Box
          sx={{
            backgroundColor: "rgb(247, 247, 247)",
            maxWidth: "400px",
            width: "40%",
            height: "42px",
            borderRadius: "12px",
            marginTop: "10px",
          }}
        >
          <form onSubmit={handleSearch}>
            <IconButton
              id="basic-button"
              type="button"
              sx={{ p: "10px" }}
              aria-label="search"
            >
              <SearchIcon sx={{color:"black"}} />
            </IconButton>
            <InputBase
              id="search-bar"
              class="btn btn-secondary dropdown-toggle"
              href="#"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
              // aria-controls={open1 ? "basic-menu" : undefined}
              // // aria-haspopup="true"
              // aria-expanded={open1 ? "true" : undefined}
              // onClick={handleClick1}
              sx={{ ml: 1, flex: 1, width: "70%" }}
              placeholder="Search...."
              inputProps={{ "aria-label": "search...." }}
              value={search}
              onChange={(e) => {
                setsearch(e.target.value);
                console.log(e.target.value);
              }}
            />
          </form>
            {/* <div class="dropdown-menu" aria-labelledby="dropdownMenuLink">
              <a class="dropdown-item" href="#">
                Action
              </a>
              <a class="dropdown-item" href="#">
                Another action
              </a>
              <a class="dropdown-item" href="#">
                Something else here
              </a>
            </div> */}
          {/* <ul id="results" className="list-group aria-labelledby="search-bar"">
            {data.map((option) => {
              return (
                <button
                  type="button"
                  key={data._id}
                  onClick={(e) => {}}
                  className="list-group-item list-group-item-action"
                >
                  {option}
                </button>
              );
            })}
          </ul> */}
        </Box>
        <Menu
          // id="basic-menu"
          anchorE2={anchorE2}
          open={open}
          onClose={handleClose}
          MenuListProps={{
            "aria-labelledby": "basic-button",
          }}
        >
          <MenuItem onClick={handleClose1}>Profile</MenuItem>
          <MenuItem onClick={handleClose1}>My account</MenuItem>
          <MenuItem onClick={handleClose1}>Logout</MenuItem>
        </Menu>

        <Stack flexDirection={"row"} gap={"3vw"} pt={1}>
          <ul className="menu" type="none" style={{ display: "flex" }}>
            <li
              className="menu-content"
              style={{ display: "flex", flexDirection: "column" }}
            >
              <Button>
                <Link to="/home" style={{ textDecoration: "none" }}>
                  <HomeLogo className="menu-logo" />
                  <h4 style={{ fontSize: "12px", textTransform: "none" }}>
                    Home
                  </h4>
                </Link>
              </Button>
            </li>

            {/* <li
              className="menu-content"
              style={{ display: "flex", flexDirection: "column" }}
            >
              <Button>
                <Link to="/products" style={{ textDecoration: "none" }}>
                  <NetworkLogo className="menu-logo" />
                  <h4 style={{ fontSize: "12px", textTransform: "none" }}>
                    Quizes
                  </h4>
                </Link>
              </Button>
            </li> */}
            <li
              className="menu-content"
              style={{ display: "flex", flexDirection: "column" }}
            >
              <Button>
                <Link to="/products" style={{ textDecoration: "none" }}>
                  <JobsLogo className="menu-logo" />
                  <h4 style={{ fontSize: "12px", textTransform: "none" }}>
                  Quizes
                  </h4>
                </Link>
              </Button>
            </li>
            {/* <li
              className="menu-content"
              style={{ display: "flex", flexDirection: "column" }}
            >
              <Button>
                <Link to="/message" style={{ textDecoration: "none" }}>
                  <MsgLogo className="menu-logo" />
                  <h4 style={{ fontSize: "12px", textTransform: "none" }}>
                    Messaging
                  </h4>
                </Link>
              </Button>
            </li>
            <li
              className="menu-content"
              style={{ display: "flex", flexDirection: "column" }}
            >
              <Button>
                <Link to="/notifications" style={{ textDecoration: "none" }}>
                  <NotificationLogo className="menu-logo" />
                  <h4 style={{ fontSize: "12px", textTransform: "none" }}>
                    Notifications
                  </h4>
                </Link>
              </Button>
            </li> */}
            {/* <li className="menu-content">
              <Link to="/profile" style={{ textDecoration: "none" }}>
                <Avatar
                  className="menu-logo"
                  sx={{ marginTop: "2px", height: "28px", width: "28px" }}
                  aria-label="recipe"
                  src={Profile}
                ></Avatar>
                <h4 style={{ textAlign: "center", lineHeight: "18px" }}>
                  {user}
                </h4>
              </Link>
            </li> */}
            <hr />
          </ul>
          <Stack flexDirection={"row"} gap={"10px"} marginTop={"10px"}>
            <Typography sx={{color: "grey"}}>
              <img
                src={calender}
                alt=""
                style={{ height: "15px", width: "15px",color: "grey", }}
              />{" "}
              {todayDateString}
            </Typography>
            {/* <CalendarMonthOutlinedIcon sx={{ fontSize: '25px' }} />
                    <TypographyText text={todayDateString} fontSize={'15'} fontWeight={'600'} /> */}
            <NotificationsIcon sx={{color: "grey"}} />
          </Stack>
          <Button
            id="basic-button"
            aria-controls={open ? "basic-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
            onClick={handleClick}
          >
            <Stack flexDirection={"row"} gap={"15px"} marginTop={"5px"}>
              <Stack>
                <Typography
                  sx={{
                    fontSize: "15px",
                    fontFamily: "inter,sans-serif",
                    color: "#000000e5",
                  }}
                >
                  {userName}
                </Typography>
                <Typography
                  sx={{
                    fontSize: "9px",
                    fontFamily: "inter,sans-serif",
                    color: "#000000e5",
                  }}
                >
                  {userRole}
                </Typography>
              </Stack>
              {/* <Button
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      > */}

              <Avatar />
            </Stack>
          </Button>
          <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
              "aria-labelledby": "basic-button",
            }}
          >
            {/* <MenuItem onClick={handleClose}>Profile</MenuItem> */}
            <MenuItem sx={{color:"black"}} onClick={handleClose}>My account</MenuItem>
            <MenuItem sx={{color:"black"}} onClick={handleLogout}>Logout</MenuItem>
          </Menu>
        </Stack>
        {/* </Stack> */}
      </Stack>
    </Box>
  );
};

export default Header;
