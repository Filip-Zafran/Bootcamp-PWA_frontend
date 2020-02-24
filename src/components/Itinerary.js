import React from "react";
import { connect } from "react-redux";
import { fetchItineraries } from "../store/actions/itineraryActions";
// only if I add actions to itinerariries
// import { Link } from "react-router-dom";

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

    return (
      <div>
        <p>Welcome to {this.props.match.params.key}</p>
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
                <img src={places.url} alt="cool_activities" />
              </div>
            </div>
          ))
        )}
      </div>
    );
  }
  //         <input
  //           type="text"
  //           value={this.state.search}
  //           onChange={this.updateSearch.bind(this)}
  //         />

  //         {/* {this.props.loading ? (
  //           <div> loading... </div>
  //         ) : (
  //           // <div>
  //           //   {filteredItineraries &&
  //           //     filteredItineraries.map(places => (
  //           //       <div key={places._id}>
  //           //         {places.title}, {places.rating}, {places.duration},{" "}
  //           //         {places.price}, {places.hashtags}{" "}
  //           //         <div>
  //           //           <img src={places.url} alt="cool_activities" />
  //           //         </div>
  //           //       </div>
  //           //     ))}
  //           // </div>
  //         // )}
  //       </div> */}
  //     );
  //   }
  // }
}
const mapStateToProps = state => {
  console.log("state", state);
  return {
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
