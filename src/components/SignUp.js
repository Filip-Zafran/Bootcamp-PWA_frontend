import React, { Component } from "react";
import Home from "../logos/home.png";
import { Link } from "react-router-dom";

export default class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      password: "",
      passRep: "",
      url: ""
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange = input => event => {
    this.setState({ [input]: event.target.value });
    console.log(event.target.value);
  };

  handleSubmit(event) {
    alert("A name was submitted: " + this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <React.Fragment>
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
        </div>

        <h1>Register here</h1>

        <form
          style={{
            background:
              "linear-gradient(90deg, #03a9f4, #f441a5, #ffeb3b, #03a9f4)"
          }}
        >
          <label>
            User Name:
            <input
              name="userName"
              type="text"
              value={this.state.userName}
              onChange={this.handleChange("name")}
            />
          </label>
          <br />
          <br />
          <label>
            Create Password:
            <input
              name="createPass"
              type="text"
              value={this.state.createPass}
              onChange={this.handleChange}
            />
          </label>
          <br />
          <br />
          <label>
            Repeat Password:
            <input
              name="repeatPass"
              type="text"
              value={this.state.repeatPass}
              onChange={this.handleChange}
            />
          </label>
          <br />
          <br />
          <label>
            e-mail:
            <input
              name="email"
              type="text"
              value={this.state.email}
              onChange={this.handleChange}
            />
          </label>
          <br /> <br />
          <label>
            Profile Picture (link):
            <input
              name="profilePic"
              type="url"
              value={this.state.email}
              onChange={this.profilePic}
            />
          </label>
        </form>
        <br />
        <br />
        <input type="submit" value="Submit" />
      </React.Fragment>
    );
  }
}
