import React, { Component } from "react";
import { Link } from "react-router-dom";
import Home from "../logos/home.png";
import { connect } from "react-redux";
import { createUser } from "../../src/store/actions/userActions";

// VALIDATION
// const express = require('express');
// const app = express();

class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      createPass: "",
      repeatPass: "",
      email: "",
      avatar: "",
      passwords_dont_match: false
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  // VALIDATION
  // const { check, validationResult } = require('express-validator');
  // app.post('/user', [
  //   check('name').isLength({ min: 5 }),
  //   check('createPass').isLength({ min: 3 })
  //   check('email').isEmail(),
  // ], (req, res) => {

  //   const errors = validationResult(req);
  //   if (!errors.isEmpty()) {
  //     return res.status(422).json({ errors: errors.array() });
  //   }

  //       User.create({
  //     username: req.body.name,
  //     password: req.body.createPass
  //   }).then(user => res.json(user));
  // });

  handleChange(e) {
    let target = e.target;
    let value = target.value;
    let name = target.name;

    this.setState({
      [name]: value
    });
    console.log(this.state);
  }

  handleSubmit(e) {
    e.preventDefault();
    console.log("this.state.createPass", this.state.createPass);
    console.log("this.state.repeatPass", this.state.repeatPass);

    // alert fill is complete
    // if{

    if (
      this.state.createPass !== "" &&
      this.state.email !== "" &&
      this.state.avatar !== "" &&
      this.state.name !== ""
    ) {
      if (this.state.createPass === this.state.repeatPass) {
        console.log("passwords match!");
        this.props.createUser(this.state);
      } else {
        console.log("no match - passwords");
        alert("Passwords do not match");
      }
    } else {
      alert("Please fill al the fields");
    }

    console.log("The form was submitt//  ed with the following data:");
    console.log(this.state);
  }
  //   else {
  //   // IF PASSWORDS MATCH then...
  //   alert("You have created your account - GREAT JOB!");
  //   }
  // }

  checkPassword() {
    if (
      this.state.createPass === "" ||
      this.state.createPass !== this.state.repeatPass
    ) {
      this.setState({ passwords_dont_match: true });
    } else {
      this.setState({ passwords_dont_match: false });
    }
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

        {/* FORM  */}
        <form
          style={{
            display: "inlineBlock",
            textAlign: "left",
            margin: "10%",
            width: "80%"
          }}
        >
          {/* NAME  */}
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
              value={this.state.name}
              onChange={this.handleChange}
            />
          </div>
          <br />

          {/* PASS CR.  */}
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
              Create Pass:&nbsp;&nbsp;
            </label>
            <input
              style={{
                flex: "3"
              }}
              name="createPass"
              type="password"
              value={this.state.createPass}
              onChange={this.handleChange}
            />
          </div>
          <br />

          {/* PASS RPT  */}
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
              Repeat Pass:&nbsp;&nbsp;
            </label>

            <input
              style={{
                flex: "3"
              }}
              name="repeatPass"
              type="password"
              value={this.state.repeatPass}
              onChange={this.handleChange}
            />
          </div>
          <br />

          {/* e-mail  */}
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
          {/* AVATAR  */}
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
              Picture <i>(link)</i>:&nbsp;&nbsp;
            </label>
            <input
              style={{
                flex: "3"
              }}
              name="avatar"
              type="url"
              value={this.state.avatar}
              onChange={this.handleChange}
            />
          </div>
        </form>

        <button
          style={{
            fontSize: "20px",
            color: "white",
            background: "grey",
            borderRadius: "40%"
            // border: "none"
          }}
          onClick={this.handleSubmit}
        >
          {" "}
          &nbsp;Submit&nbsp;{" "}
        </button>
      </React.Fragment>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    createUser: user => dispatch(createUser(user))
  };
};

export default connect(null, mapDispatchToProps)(SignUp);
