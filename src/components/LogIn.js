import React from "react";
import { Link } from "react-router-dom";
import Home from "../logos/home.png";
import { AwesomeButton } from "react-awesome-button";
import "react-awesome-button/dist/styles.css";

// import { connect } from "react-redux";  ??
// import { Login } from "../../src/store/actions/logActions";

export default class LogIn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      createPass: ""
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    let target = e.target;
    let value = target.value;
    let name = target.name;

    this.setState({
      [name]: value
    });
    console.log(this.state);
  }

  handleSubmit() {
    // 2. dispach an action which does post to my backend
    console.log(this.state);
  }

  render() {
    return (
      <div>
        <Link to="/">
          <img
            className="homeImg"
            style={{
              width: "20%",
              padding: "10px",
              paddingBottom: "120px"
            }}
            src={Home}
            alt="home symbol"
          />
        </Link>
        <h1>Hello sunshine :) </h1>

        <div
          style={{
            display: "grid"
          }}
        >
          <div>
            <label
              style={{
                float: "left",
                paddingLeft: "15px"
              }}
            >
              User Name:&nbsp;&nbsp;
            </label>
            <input
              name="name"
              value={this.state.name}
              onChange={this.handleChange}
              style={{
                float: "left",
                paddingLeft: "15px"
              }}
            />
          </div>
          <div>
            <label
              style={{
                float: "left",
                paddingLeft: "15px"
              }}
            >
              Password:&nbsp;&nbsp;
            </label>
            <input
              name="createPass"
              value={this.state.createPass}
              onChange={this.handleChange}
              style={{
                float: "left",
                paddingLeft: "15px"
              }}
            />
          </div>
          <br />
          <button type="primary" onClick={this.handleSubmit}>
            Log in
          </button>

          {/* <AwesomeButton type="primary" onClick={this.handleSubmit}>
            Log in
          </AwesomeButton> */}
        </div>
      </div>
    );
  }
}
