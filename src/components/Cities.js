import React from "react";
import { connect } from "react-redux";
import { fetchCities } from "../store/actions/cityActions";
import { Link } from "react-router-dom";

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
    const filteredCities = this.props.cities.filter(cityObject => {
      return cityObject.city
        .toLowerCase()
        .includes(this.state.search.toLowerCase());
    });

    return (
      <div>
        <p style={{ color: "blue" }}>
          My next stop is...{this.props.match.params.key}
        </p>
        <input
          type="text"
          value={this.state.search}
          onChange={this.updateSearch.bind(this)}
        />

        {/*         
const styles = StyleSheet.create({
    bold: {fontWeight: 'bold'},
    italic: {fontStyle: 'italic'},
    underline: {textDecorationLine: 'underline'}
}); */}

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
                        style={{ height: "30%", width: "45%" }}
                        src={places.url}
                        // alt="cool_cities"
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
  error: state.cities.error
});
const mapDispatchToProps = dispatch => {
  return {
    fetchCities: () => dispatch(fetchCities())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Cities);
