import React from "react";
import { Link } from "react-router-dom";

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
    </div>
  );
}
