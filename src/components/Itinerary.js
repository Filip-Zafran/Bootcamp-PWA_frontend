import React from "react";
import { connect } from "react-redux";
import { fetchItineraries } from "../store/actions/itineraryActions";
export class Itineraries extends React.Component {
  componentDidMount() {
    console.log(this.props);
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
    console.log(this.props);
    const filteredItineraries = this.props.itineraries.filter(
      itineraryObject => {
        return itineraryObject.itinerary
          .toLowerCase()
          .includes(this.state.search.toLowerCase());
      }
    );

    return (
      <div>
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

const mapStateToProps = state => ({
  itineraries: state.itineraries.items,
  loading: state.itineraries.loading,
  error: state.itineraries.error
});
const mapDispatchToProps = dispatch => {
  return {
    fetchItineraries: () => dispatch(fetchItineraries())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Itineraries);
