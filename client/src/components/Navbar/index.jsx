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
import React from "react";
import SearchIcon from "@mui/icons-material/SearchRounded";
import calender from "../../assets/calender.png";
import NotificationsIcon from "@mui/icons-material/Notifications";
import { Link } from "react-router-dom";
import { ReactComponent as HomeLogo } from "../../assets/utils/home-logo.svg"
import { ReactComponent as JobsLogo } from "../../assets/utils/jobs-logo.svg"
import { ReactComponent as MsgLogo } from "../../assets/utils/msg-logo.svg"
import { ReactComponent as NetworkLogo } from "../../assets/utils/network-logo.svg"
import { ReactComponent as NotificationLogo } from "../../assets/utils/notification-logo.svg"
// import { ReactComponent as BusinessLogo } from "../../assets/utils/business-logo.svg"
import "./header.css";

const Header = () => {
  var today = new Date();
  var weekdays = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  var dayIndex = today.getDay();
  var dayName = weekdays[dayIndex];
  var date = today.getDate();
  var month = today.getMonth() + 1;
  var Month;
  Month = month < 10 ? "0" + month : month;
  var year = today.getFullYear();
  var todayDateString = dayName + ", " + date + "/" + Month + "/" + year;
  return (
    <Box sx={{ backgroundColor: "#FCFBF4", height: "8vh", width: "100vw",boxShadow:"revert-layer",zIndex:"1" ,marginTop:0,borderColor:"ButtonHighlight",position:"sticky"}}>
      <Stack
        flexDirection={"row"}
        sx={{  justifyContent: "space-around" }}
      >
        {/* <Stack  flexDirection={'row'} sx={{gap:"",justifyContent:"space-around"}}> */}

        <Box
          sx={{
            backgroundColor: "rgb(247, 247, 247)",
            maxWidth: "400px",
            width: "40%",
            height: "42px",
            borderRadius: "12px",
            marginTop:"10px"
          }}
        >
          <IconButton type="button" sx={{ p: "10px" }} aria-label="search">
            <SearchIcon />
          </IconButton>
          <InputBase
            sx={{ ml: 1, flex: 1, width: "70%" }}
            placeholder="Search...."
            inputProps={{ "aria-label": "search...." }}
          />
        </Box>

        <Stack flexDirection={"row"} gap={"3vw"} pt={1}>
          <ul className="menu" type="none" style={{ display: "flex" }}>
            <li
              className="menu-content"
              style={{ display: "flex", flexDirection: "column" }}
            >
              <Button>
                <Link to="/" style={{ textDecoration: "none" }}>
                  <HomeLogo className="menu-logo" />
                  <h4 style={{ fontSize: "12px", textTransform: "none" }}>
                    Home
                  </h4>
                </Link>
              </Button>
            </li>

            <li
              className="menu-content"
              style={{ display: "flex", flexDirection: "column" }}
            >
              <Button>
                <Link to="/mynetwork" style={{ textDecoration: "none" }}>
                  <NetworkLogo className="menu-logo" />
                  <h4 style={{ fontSize: "12px", textTransform: "none" }}>
                    Mynetwork
                  </h4>
                </Link>
              </Button>
            </li>
            <li
              className="menu-content"
              style={{ display: "flex", flexDirection: "column" }}
            >
              <Button>
                <Link to="/jobs" style={{ textDecoration: "none" }}>
                  <JobsLogo className="menu-logo" />
                  <h4 style={{ fontSize: "12px", textTransform: "none" }}>
                    Jobs
                  </h4>
                </Link>
              </Button>
            </li>
            <li
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
            </li>
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
            <Typography>
              <img
                src={calender}
                alt=""
                style={{ height: "15px", width: "15px" }}
              />{" "}
              {todayDateString}
            </Typography>
            {/* <CalendarMonthOutlinedIcon sx={{ fontSize: '25px' }} />
                    <TypographyText text={todayDateString} fontSize={'15'} fontWeight={'600'} /> */}
            <NotificationsIcon />
          </Stack>
          <Stack flexDirection={"row"} gap={"15px"} marginTop={"5px"}>
            <Stack>
              <Typography
                sx={{
                  fontSize: "15px",
                  fontFamily: "inter,sans-serif",
                  color: "#000000e5",
                }}
              >
                Mark Collins
              </Typography>
              <Typography
                sx={{
                  fontSize: "9px",
                  fontFamily: "inter,sans-serif",
                  color: "#000000e5",
                }}
              >
                Business man
              </Typography>
            </Stack>
            <Avatar />
          </Stack>
        </Stack>
        {/* </Stack> */}
      </Stack>
    </Box>
  );
};

export default Header;
