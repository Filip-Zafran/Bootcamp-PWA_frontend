import React from "react";
import { connect } from "react-redux";
import { fetchCities } from "../store/actions/cityActions";
export class Cities extends React.Component {
  // export default class Cities extends React.Component {
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

  componentDidMount() {
    console.log(this.props);
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
        <input
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
                    <img src={places.url} alt="cool_cities" />
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
  error: state.cities.error
});
const mapDispatchToProps = dispatch => {
  return {
    fetchCities: () => dispatch(fetchCities())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Cities);
