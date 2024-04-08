import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Admin = (props) => {
    const user = useSelector(state=>state.user.userInfo.role)

  const { Component } = props;
  const navigate = useNavigate();
  useEffect(() => {
    if (user !== "admin") navigate("/");
  }, [user, navigate]);

  return (
    <div>
      <Component />
    </div>
  );
};
export default Admin;