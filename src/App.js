import React from "react";
// import React, { Component } from "react";
// import "./App.css";
// import { BrowserRouter, Route, Switch } from "react-router-dom";
// import Landing from "./screen/Landing";
// import Cities from "./screen/Cities";

// export default class App extends Component {
//   render() {
//     return (
//       <BrowserRouter>
//         <div className="App">
//           <Switch>
//             <Route exact path="/" component={Landing} />
//             <Route exact path="/cities" component={Cities} />
//           </Switch>
//         </div>
//       </BrowserRouter>
//     );
//   }
// }

export default class FetchData extends React.Component {
  state = {
    loading: true
    // city: null
  };

  async componentDidMount() {
    const url = "http://localhost:5000/cities/all";
    const response = await fetch(url);
    const data = await response.json();
    // this.setState({ city: data.results[0], loading: false });
    console.log(data);
  }

  render() {
    return (
      <div>
        {/* {this.state.loading || !this.state.city ? ( */}

        {this.state.loading ? (
          <div> loading... </div>
        ) : (
          <div> city example</div>
        )}
      </div>
    );
  }
}
