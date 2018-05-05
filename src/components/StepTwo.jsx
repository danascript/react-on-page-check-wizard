import React, { Component } from "react";
import { Link } from "react-router-dom";

class StepTwo extends Component {
  url = React.createRef();
  keywords = React.createRef();

  handleSubmit = e => {
    e.preventDefault();

    const url = this.url.current.value.trim();
    const keywords = this.keywords.current.value.trim();

    const keywordsSplitted = keywords.split(",");

    this.props.fillSecondStep(url, keywordsSplitted);
  };

  render() {
    return (
      <form onChange={this.handleSubmit}>
        <h2>Website Data </h2>
        <div className="form-group">
          <input
            type="text"
            className="form-control"
            placeholder="URL"
            ref={this.url}
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            className="form-control"
            placeholder="Keywords, comma separated"
            ref={this.keywords}
          />
        </div>
        <Link to="/3" className="btn btn-dark">
          Next Step >>
        </Link>
      </form>
    );
  }
}

export default StepTwo;
