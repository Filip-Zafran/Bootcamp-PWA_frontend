import React from "react";
import { Link } from "react-router-dom";
import Home from "../logos/home.png";

// probaj kopirat Sign up JS komponentu

export default function Login() {
  return (
    <div>
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
      <h1>log in</h1>
    </div>
  );
}
