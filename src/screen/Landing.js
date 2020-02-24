import React from "react";
import { Link } from "react-router-dom";
// import Symbol_circled from "../../wireframe/logos/circled-right-2.png";

export default function Landing() {
  return (
    <div>
      <h1>Land</h1>
      <Link to="/cities">
        <button> Find Your City</button>
      </Link>

      <Link to="/SignUp">
        <button> Sign Up</button>
      </Link>

      <Link to="/LogIn">
        <button> Log In </button>
      </Link>

      {/* <Link to="/Symbol_circled">
          <img src={Symbol_circled} alt=“symbol for circle" />
    </Link>
       */}
      <div>{/* <img src={Symbol_circled} alt="symbol for circle" /> */}</div>

      {/* <div className="logo">
                <img src={logo} alt="logo"/>
            </div> */}
    </div>
  );
}
