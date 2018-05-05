import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Nav from "./Nav";
import StepOne from "./StepOne";
import StepTwo from "./StepTwo";
import StepThree from "./StepThree";

class App extends Component {
  state = {
    currentStep: 1,
    userData: {
      firstName: "",
      lastName: "",
      email: "",
      company: ""
    },
    website: {
      url: "",
      keywords: []
    },
    results: []
  };

  fillFirstStep = (first, last, company, email) => {
    this.setState(state => {
      state.userData.firstName = first;
      state.userData.lastName = last;
      state.userData.company = company;
      state.userData.email = email;

      return state;
    });

    console.log(this.state.userData);
  };

  fillSecondStep = (url, keywords) => {
    this.setState(state => {
      state.website.url = url;
      state.website.keywords = keywords;

      return state;
    });

    console.log(this.state.website);
  };

  render() {
    return (
      <Router>
        <div className="app container">
          <h2 className="main-header text-center">On Page Check</h2>
          <Nav />
          <div className="container">
            <Route
              exact
              path="/"
              render={() => <StepOne fillFirstStep={this.fillFirstStep} />}
            />
            <Route
              exact
              path="/2"
              render={() => <StepTwo fillSecondStep={this.fillSecondStep} />}
            />
            <Route
              exact
              path="/3"
              render={() => (
                <StepThree
                  url={this.state.website.url}
                  keywords={this.state.website.keywords}
                />
              )}
            />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
