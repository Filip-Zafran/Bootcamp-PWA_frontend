import React from "react";
import { connect } from "react-redux";
import { fetchItineraries } from "../store/actions/itineraryActions";
// only if I add actions to itinerariries
// import { Link } from "react-router-dom";

class Itineraries extends React.Component {
  componentDidMount() {
    console.log(this.props.match.params.key);
    this.props.fetchItineraries();
  }

  constructor(props) {
    super(props);

    this.state = {
      search: "",
      loading: true,
      itineraries: []
    };
  }

  updateSearch(event) {
    this.setState({ search: event.target.value.substr(0, 10) });
  }

  render() {
    const filteredItineraries = this.props.itineraries.filter(
      itineraryObject => {
        return itineraryObject.itinerary
          .toLowerCase()
          .includes(this.state.search.toLowerCase());
      }
    );

    return (
      <div>
        <p>Welcome to {this.props.match.params.key}</p>
        <input
          type="text"
          value={this.state.search}
          onChange={this.updateSearch.bind(this)}
        />

        {this.props.loading ? (
          <div> loading... </div>
        ) : (
          <div>
            {filteredItineraries &&
              filteredItineraries.map(places => (
                <div key={places._id}>
                  {places.title}, {places.rating}, {places.duration},{" "}
                  {places.price}, {places.hashtags}{" "}
                  <div>
                    <img src={places.url} alt="cool_activities" />
                  </div>
                </div>
              ))}
          </div>
        )}
      </div>
    );
  }
}

const mapToProps = state => ({
  itineraries: state.itineraries,
  loading: state.itineraries,
  error: state.itineraries
});
const mapDispatchToProps = dispatch => {
  return {
    fetchItineraries: () => dispatch(fetchItineraries())
  };
};

export default connect(mapToProps, mapDispatchToProps)(Itineraries);
