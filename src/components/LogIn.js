import React from "react";
import { Link } from "react-router-dom";
import Home from "../logos/home.png";

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
              width: "10%",
              padding: "10px"
            }}
            src={Home}
            alt="home symbol"
          />
        </Link>

        <h1>log in</h1>

        <div
        // style={{
        //   display: "flex"
        // }}
        >
          <div>
            <label>User Name:&nbsp;&nbsp;</label>
            <input
              name="name"
              value={this.state.name}
              onChange={this.handleChange}
            />
          </div>

          <div>
            <label>Password:&nbsp;&nbsp;</label>
            <input
              name="createPass"
              value={this.state.createPass}
              onChange={this.handleChange}
            />
          </div>
          <br />

          <button
            class="submit"
            // style={{
            //   fontSize: "20px",
            //   color: "white",
            //   background: "grey",
            //   borderRadius: "40%"
            // }}
            onClick={this.handleSubmit}
          >
            {" "}
            &nbsp;Submit&nbsp;{" "}
          </button>
        </div>
      </div>
    );
  }
}
