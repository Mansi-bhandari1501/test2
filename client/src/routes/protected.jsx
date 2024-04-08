
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Protected = (props) => {
    const user = useSelector(state=>state.user.userInfo.role)
console.log(user)
  const { Component } = props;
  const navigate = useNavigate();
  useEffect(() => {
    if (user !== "user") navigate("/login");
  }, [user, navigate]);

  return (
    <div>
      <Component />
    </div>
  );
};
export default Protected;