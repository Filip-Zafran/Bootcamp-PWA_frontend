import React from "react";
import { Link } from "react-router-dom";
import Home from "../logos/home.png";

export default function Login() {
  return (
    <div>
      <h1>log in</h1>
      <Link to="/">
        <img
          className="homeImg"
          style={{
            width: "10%",
            padding: "10px"
          }}
          src={Home}
          alt="home symbol"
        />
      </Link>
    </div>
  );
}
