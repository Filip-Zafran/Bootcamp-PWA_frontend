import React from "react";
import { connect } from "react-redux";
import { fetchItineraries } from "../store/actions/itineraryActions";

import { Link } from "react-router-dom";
import Home from "../logos/home.png";
import Back from "../logos/circled-left-2.png";

class Itineraries extends React.Component {
  componentDidMount() {
    const requiredCity = this.props.match.params.key;
    this.props.fetchItineraries(requiredCity);
    console.log("this.props", this.props);
  }

  constructor(props) {
    super(props);

    // this.state = {
    //   search: "",
    //   loading: true,
    //   itineraries: []
    // };
  }

  // updateSearch(event) {
  //   this.setState({ search: event.target.value.substr(0, 10) });
  // }

  render() {
    // const filteredItineraries = this.props.itineraries.filter(
    //   itineraryObject => {
    //     return itineraryObject.itinerary
    //       .toLowerCase()
    //       .includes(this.state.search.toLowerCase());
    //   }
    // );
    const favouriteItineraries = this.props.favouriteItineraries;

    return (
      <div>
        <Link to="/cities">
          <img
            className="backImg"
            style={{
              width: "10%",
              padding: "10px"
            }}
            src={Back}
            alt="back symbol"
          />
        </Link>

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

        <p
          style={{
            fontSize: "40px",
            fontDecoration: "strong",
            padding: "2px",
            margin: "2px"
          }}
        >
          {" "}
          <u>
            <b>{this.props.match.params.key}</b>
          </u>
        </p>

        <r
          style={{
            fontSize: "20px"
            // marginBottom: "30px"
          }}
        >
          <i>has something for everyone:</i>
        </r>
        {this.props.loading ? (
          <div> loading... </div>
        ) : (
          this.props.itineraries.map((places, index) => (
            <div key={index}>
              <p>
                {places.title}, {places.rating}, {places.duration},{" "}
                {places.price}, {places.hashtags}{" "}
              </p>
              <div>
                <div className="favourite-btn">
                  <span
                    style={
                      favouriteItineraries.includes(places._id)
                        ? { color: "red" }
                        : { color: "blue" }
                    }
                  >
                    heart
                  </span>{" "}
                </div>
                <img
                  style={{ width: "85%" }}
                  src={places.url}
                  alt="cool_cities"
                />

                {/* <img src={places.url} alt="cool_activities" /> */}
              </div>
            </div>
          ))
        )}
      </div>
    );
  }
}

const mapStateToProps = state => {
  console.log("state", state);
  return {
    favouriteItineraries: state.login.currentUser.favouriteItineraries,
    itineraries: state.itineraries.items,
    loading: state.itineraries.loading,
    error: state.itineraries.errors
  };
};
const mapDispatchToProps = dispatch => {
  return {
    fetchItineraries: requiredCity => dispatch(fetchItineraries(requiredCity))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Itineraries);
