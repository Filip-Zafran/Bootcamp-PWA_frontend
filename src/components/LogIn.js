import React from "react";
import { Link } from "react-router-dom";
import Home from "../logos/home.png";
// import { AwesomeButton } from "react-awesome-button";
import "react-awesome-button/dist/styles.css";
import { connect } from "react-redux";
import { loggedUser } from "../../src/store/actions/logActions";

class LogIn extends React.Component {
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
    if (this.state.createPass !== "" && this.state.name !== "") {
      this.props.loggedUser(this.state);
      this.props.history.push("/cities");
    } else {
      // add condition if add if ()
      console.log("no match - passwords");
      alert("Password is incorrect");
      this.props.history.push("/LogIn"); // test
    }
  }
  // } else   {
  //     alert("Please fill both fields"); }

  // }

  // 2. ACTIONS then decode
  // 3. in redux define who is logged in...

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
        <h1>Hello sunshine </h1>
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
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    loggedUser: user => dispatch(loggedUser(user))
  };
};

export default connect(null, mapDispatchToProps)(LogIn);
