import React, { useEffect } from 'react'
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router';


    const Login = (props) => {
        const user = useSelector(state=>state.user.userToken)
    
      const { Component } = props;
      const navigate = useNavigate();
      useEffect(() => {
        if (!user ) navigate("/login");
      }, [user, navigate]);
    
      return (
        <div>
          <Component />
        </div>
      );
    };


export default Login
