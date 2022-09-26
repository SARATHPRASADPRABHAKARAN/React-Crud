import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function login() {
  return (
    <div class="log-form">
      <Link to="/signupage">go tot signup</Link>
      <h2>Login to your account</h2>
      <form onSubmit={(e) => logins(e)}>
        <input
          type="text"
          title="username"
          id="username"
          placeholder="username"
        />
        <input
          type="password"
          id="password"
          title="username"
          placeholder="password"
        />
        <button type="submit" class="btn">
          Login
        </button>
        <a class="forgot" href="#">
          Forgot Username?
        </a>
      </form>
    </div>
  );
}


function logins(e) {
  e.preventDefault();
  let request = {
    username: document.getElementById("username").value,
    password: document.getElementById("password").value,
  };
  axios
    .post("http://localhost:9000/login", request)
    .then((resp) => {
      console.log(resp)
      alert(resp.data.message);
    })
    .catch((err) => {
      console.log(err);
    });
}

export default login;
