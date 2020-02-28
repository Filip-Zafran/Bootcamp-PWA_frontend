import React, { Component } from "react";
import Home from "../logos/home.png";
import { Link } from "react-router-dom";
// import { postUser } from "../../store/actions/userActions";

export default class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      createPass: "",
      repeatPass: "",
      email: "",
      avatar: ""
      // password: ""
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange = input => event => {
    this.setState({ [input]: event.target.value });
    console.log(event.target.value);
  };

  handleSubmit(event) {
    alert("WELCOME ON BOARD! > check your e-mail for further instructions");
    event.preventDefault();

    // const sign = {
    //   name: this.state.name,
    //   createPass: this.state.createPass,
    //   repeatPass: this.state.repeatPass
    // email: this.state.email,
    //   avatar: this.state.avatar,
    //   password: this.state.password
    // };
    // console.log(sign);
    // this.props.dispatch(postSign(sign));

    // post user funtion / to Actions
    // dispatch
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
              {/* NAME  */}
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
              {/* PASS CR.  */}
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
              {/* PASS RPT  */}
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
              {/* e-mail  */}
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
              {/* AVATAR  */}
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

        {/* PASS - word */}

        <button onClick={this.handleSubmit}> Submit </button>
      </React.Fragment>
    );
  }
}
