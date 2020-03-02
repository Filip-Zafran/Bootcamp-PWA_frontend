import React from "react";
import { Link } from "react-router-dom";
import Home from "../logos/home.png";

// import { connect } from "react-redux";  ??
// import { Login } from "../../src/store/actions/logActions";

export default class LogIn extends React.Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     name: "",
  //     password: ""
  //   };

  //   this.handleChange = this.handleChange.bind(this);
  //   this.handleSubmit = this.handleSubmit.bind(this);
  // }

  // export default function Login() {
  render() {
    return (
      <div>log in page</div>
      // <div>
      //   <Link to="/">
      //     <img
      //       className="homeImg"
      //       style={{
      //         width: "10%",
      //         padding: "10px"
      //       }}
      //       src={Home}
      //       alt="home symbol"
      //     />
      //   </Link>

      //   <h1>log in</h1>

      //   <div
      //     style={{
      //       display: "flex"
      //     }}
      //   >
      //     <div>
      //       <label>User Name:&nbsp;&nbsp;</label>
      //       <input value={this.state.name} onChange={this.handleChange} />
      //     </div>

      //     <div>
      //       <label>Password:&nbsp;&nbsp;</label>
      //       <input
      //         name="name"
      //         value={this.state.password}
      //         onChange={this.handleChange}
      //       />
      //     </div>
      //   </div>
      //   <br />
      //   <button
      //     style={{
      //       fontSize: "20px",
      //       color: "white",
      //       background: "grey",
      //       borderRadius: "40%"
      //     }}
      //     // onClick={this.handleSubmit}
      //   >
      //     {" "}
      //     &nbsp;Submit&nbsp;{" "}
      //   </button>
      // </div>
    );
  }
}
