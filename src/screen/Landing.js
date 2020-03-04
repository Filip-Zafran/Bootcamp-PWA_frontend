import React from "react";
import { Link } from "react-router-dom";
import RightArrow from "../../src/logos/krug4.png";
import Background from "../../src/logos/BACKGROUND_PLANE.png";
import LoginPlane from "../../src/logos/log in symbol.png";
import SignupGuy from "../../src/logos/Sign up simbol.png";

export default function Landing() {
  return (
    <div styles={{ backgroundImage: `url(${Background})` }}>
      <h1>
        <span
          style={{
            color: "rgba(0, 0, 255, 0.5)"
          }}
        >
          MY
        </span>
        <span
          style={{
            color: "rgba(255, 255, 0, 0.5)"
          }}
        >
          tinerary
        </span>
      </h1>
      <h3
        style={{
          paddingLeft: "20px",
          paddingRight: "20px",
          paddingBottom: "40px"
        }}
      >
        All your travels accessible in a few seconds
      </h3>
      {"\n"}

      <div>
        {" "}
        <Link to="/SignUp">
          <img
            style={{
              width: "20%",
              padding: "20px",
              float: "left"
            }}
            src={SignupGuy}
            alt="Sign Up"
          />
        </Link>
        <Link to="/LogIn">
          <img
            style={{
              width: "20%",
              padding: "20px",
              float: "left"
            }}
            src={LoginPlane}
            alt="Log in"
          />
        </Link>
        {"\n"}
      </div>
      <Link to="/cities">
        <img
          style={{
            width: "80%",
            padding: "10px"
          }}
          src={RightArrow}
          alt="Right Arrow symbol"
        />
      </Link>
      {"\n"}
    </div>
  );
}
