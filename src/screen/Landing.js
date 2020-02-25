import React from "react";
import { Link } from "react-router-dom";
import RightArrow from "../../src/logos/circled-right-2.png";
import Logo from "../../src/logos/MYtineraryLogo2.png";

export default function Landing() {
  return (
    <div
      style={{
        background: "linear-gradient(90deg, #03a9f4, #f441a5, #ffeb3b, #03a9f4)"
      }}
    >
      <h1>Mytinerary</h1>
      <h3>All your travels accessible in a few seconds</h3>
      {/* <Link to="/cities">
        <button> Find Your City</button>
      </Link> */}
      {"\n"}

      <div
        style={{
          display: "grid",
          flex: "row",
          padding: "5px"
        }}
      >
        <Link to="/SignUp">
          <button> Sign Up</button>
        </Link>
        <Link to="/LogIn">
          <button> Log In </button>
        </Link>
        {"\n"}
      </div>

      <Link to="/cities">
        <img
          style={{
            width: "40%",
            padding: "10px"
          }}
          src={RightArrow}
          alt="Right Arrow symbol"
        />
      </Link>
      {"\n"}

      <div
        style={{
          display: "grid",
          flex: "row",
          padding: "5px"
        }}
      >
        <img
          style={{
            width: "40%",
            padding: "10px",
            borderRadius: "12%",
            justifySelf: "center"
          }}
          src={Logo}
          alt="logo"
        />
      </div>
    </div>
  );
}
