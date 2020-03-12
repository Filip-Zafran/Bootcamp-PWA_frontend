import React from "react";

import { connect } from "react-redux";
import { fetchCities } from "../store/actions/cityActions";
import { Link } from "react-router-dom";
import Home from "../logos/home.png";
import logReducer from "../store/reducers/logReducer";

class Cities extends React.Component {
  componentDidMount() {
    console.log(this.props.match.params.key);
    this.props.fetchCities();
  }

  constructor(props) {
    super(props);

    this.state = {
      search: "",
      loading: true,
      cities: []
    };
  }

  updateSearch(event) {
    this.setState({ search: event.target.value.substr(0, 10) });
  }

  render() {
    console.log(this.props);
    const filteredCities = this.props.cities.filter(cityObject => {
      return cityObject.city
        .toLowerCase()
        .includes(this.state.search.toLowerCase());
    });

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

        <h1> hi {this.props.currentUser.name}</h1>

        {/* {isAutheticated
        :
        // login */}

        <p style={{ color: "blue" }}>
          <i>My next stop is...{this.props.match.params.key}</i>
        </p>
        <input
          style={{
            fontSize: "20px",
            height: "35px",
            marginBottom: "20px"
          }}
          type="text"
          value={this.state.search}
          onChange={this.updateSearch.bind(this)}
        />
        {this.props.loading ? (
          <div> loading... </div>
        ) : (
          <div>
            {filteredCities &&
              filteredCities.map(places => (
                <div key={places._id}>
                  {places.city}, {places.country}{" "}
                  <div>
                    <Link to={"/itineraries/" + places.city}>
                      <img
                        style={{
                          height: "30%",
                          width: "45%",
                          paddingEnd: "15px"
                        }}
                        src={places.url}
                        alt="cool_cities"
                      />
                    </Link>
                  </div>
                </div>
              ))}
          </div>
        )}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  cities: state.cities.items,
  loading: state.cities.loading,
  error: state.cities.error,
  // when logged in
  isAuthenticated: state.login.isAuthenticated,
  currentUser: state.login.currentUser
});
const mapDispatchToProps = dispatch => {
  return {
    fetchCities: () => dispatch(fetchCities())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Cities);
