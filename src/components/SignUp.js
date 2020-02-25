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
            display: "inlineBlock",
            textAlign: "left",
            margin: "10%",
            width: "80%"
          }}
        >
          <div
            style={{
              display: "flex"
            }}
          >
            <label
              style={{
                flex: "2"
              }}
            >
              User Name:&nbsp;&nbsp;
            </label>

            <input
              style={{
                flex: "3"
              }}
              name="name"
              type="text"
              value={this.state.userName}
              onChange={this.handleChange("name")}
            />
          </div>
          <br />
          <div
            style={{
              display: "flex"
            }}
          >
            <label
              style={{
                flex: "2"
              }}
            >
              Create Password:&nbsp;&nbsp;
            </label>
            <input
              style={{
                flex: "3"
              }}
              name="createPass"
              type="text"
              value={this.state.createPass}
              onChange={this.handleChange}
            />
          </div>
          <br />
          <div
            style={{
              display: "flex"
            }}
          >
            <label
              style={{
                flex: "2"
              }}
            >
              Repeat Password:&nbsp;&nbsp;
            </label>

            <input
              style={{
                flex: "3"
              }}
              name="repeatPass"
              type="text"
              value={this.state.repeatPass}
              onChange={this.handleChange}
            />
          </div>
          <br />
          <div
            style={{
              display: "flex"
            }}
          >
            <label
              style={{
                flex: "2"
              }}
            >
              e-mail:&nbsp;&nbsp;
            </label>
            <input
              style={{
                flex: "3"
              }}
              name="email"
              type="text"
              value={this.state.email}
              onChange={this.handleChange}
            />
          </div>
          <br />
          <div
            style={{
              display: "flex"
            }}
          >
            <label
              style={{
                flex: "2"
              }}
            >
              Profile Picture (link):&nbsp;&nbsp;
            </label>
            <input
              style={{
                flex: "3"
              }}
              name="avatar"
              type="url"
              value={this.state.email}
              onChange={this.profilePic}
            />
          </div>
        </form>
        <br />

        <input type="submit" value="Submit" />
      </React.Fragment>
    );
  }
}
