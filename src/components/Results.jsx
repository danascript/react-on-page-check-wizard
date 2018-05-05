import React, { Component, Fragment } from "react";
import Axios from "axios";
import onPageCheck from "./../modules/onPageCheck";

class Results extends Component {
  state = {
    loading: true
  };

  async componentDidMount() {
    const website = this.props.url;
    const proxiedWebsite = `https://cors-anywhere.herokuapp.com/${website}`;

    let response = "";

    try {
      response = await Axios.get(proxiedWebsite);
    } catch (error) {
      console.log(error);
    }

    this.results = onPageCheck(response.data.body);
  }

  render() {
    return <Fragment>This is the result: </Fragment>;
  }
}

export default Results;
