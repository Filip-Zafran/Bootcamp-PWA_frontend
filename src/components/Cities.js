import React from "react";
import { connect } from "react-redux";

export default class Cities extends React.Component {
  //   state = {
  //     loading: true,
  //     cities: []
  //   };

  //   async componentDidMount() {
  //     const url = "http://localhost:5000/cities/all";
  //     try {
  //       const response = await fetch(url);
  //       const data = await response.json();
  //       this.setState({ cities: data, loading: false });
  //       console.log(data);
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   }

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
    // FILTER - WHY IS CITY.CITY ?
    const filteredCities = this.state.cities.filter(city => {
      return city.city.toLowerCase().includes(this.state.search.toLowerCase());
    });

    return (
      <div>
        <input
          type="text"
          value={this.state.search}
          onChange={this.updateSearch.bind(this)}
        />

        {this.state.loading ? (
          <div> loading... </div>
        ) : (
          <div>
            {filteredCities &&
              filteredCities.map(places => (
                <div key={places._id}>
                  {places.city}, {places.country}{" "}
                  <div>
                    <img src={places.url} />
                  </div>
                </div>
              ))}
          </div>
        )}
      </div>
    );
  }
}
