import { React, useState, useRef } from "react";
import staw from "../img/staw.png";
import Axios from "axios";
import { Link } from "react-router-dom";

const Register = () => {
  const name = useRef(); // to get user input value
  const email = useRef(); // to get user input value
  const password = useRef(); // to get user input value

  function handleSignUpClick(event) {
    event.preventDefault(); // prevent page refreshing when onclick button is clicked

    Axios.post("http://localhost:8080/api/v1/users/signup", {
      name: name.current.value,
      username: "tiger",
      email: email.current.value,
      password: password.current.value,
      confirmPassword: "something",
    })
      .then((response) => alert(response))
      .catch((err) => console.log(err));
  }

  return (
    <div className="formContainer">
      <div className="formWrapper">
        <span className="logo">
          <img src={staw} />
          Stawberry
        </span>
        <span className="title">Register</span>
        <form>
          <input type="text" ref={name} placeholder="Display name" />
          <input type="email" ref={email} placeholder="Email" />
          <input type="password" ref={password} placeholder="Password" />
          <button onClick={handleSignUpClick}> Sign up</button>
        </form>
        <Link to={`/`}>You do have an account? Login</Link>
      </div>
    </div>
  );
};

export default Register;
