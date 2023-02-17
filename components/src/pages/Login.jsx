import { React, useRef, useState } from "react";
import staw from "../img/staw.png";
import Axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { Navigate, Redirect, Route } from "react-router";
const ACCESS_TOKEN = "ACCESS_TOKEN";
const Login = () => {
  const username = useRef(); // to get user input of username
  const password = useRef(); // to get user input of password
  const navigate = useNavigate(); // auto navigate to other page
  const handleSignin = (event) => {
    event.preventDefault(); // stop refreshing page when onClick button is clicked
    // username ==> backend request body name
    // password ==> backend request body name
    // username.current.value ==> user input value username in front
    // password.current.value ==> user input value password in front
    Axios.post("http://localhost:8080/api/v1/users/signin", {
      username: username.current.value,
      password: password.current.value,
    })
      .then((response) => {
        // we get response from backend after we make post request to backend
        console.log(response.data.userAccessToken); // print response vlaue
        localStorage.setItem(ACCESS_TOKEN, response.data.userAccessToken); // store access token chrome local storage
        navigate("/home"); // go to home page when login is success
      })
      .catch((err) => console.log(err)); // show error in chrome consle if any
  };
  return (
    <div className="formContainer">
      <div className="formWrapper">
        <span className="logo">
          <img src={staw} />
          Stawberry
        </span>
        <span className="title">Login</span>
        <form>
          <input type="text" ref={username} placeholder="Email" />
          <input type="password" ref={password} placeholder="Password" />
          <button onClick={handleSignin}>Sign in</button>
        </form>
        <Link to={`/register`}>You don't have an account? Register</Link>
      </div>
    </div>
  );
};

export default Login;
