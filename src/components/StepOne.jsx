import React, { Component } from "react";
import { Link } from "react-router-dom";

class StepOne extends Component {
  firstName = React.createRef();
  lastName = React.createRef();
  company = React.createRef();
  email = React.createRef();

  handleSubmit = e => {
    e.preventDefault();

    const firstName = this.firstName.current.value.trim();
    const lastName = this.lastName.current.value.trim();
    const company = this.company.current.value.trim();
    const email = this.email.current.value.trim();

    this.props.fillFirstStep(firstName, lastName, company, email);
  };

  render() {
    return (
      <form onChange={this.handleSubmit}>
        <h2>Personal Data </h2>
        <div className="form-group">
          <input
            type="text"
            className="col-12 form-control"
            id="firstname"
            aria-describedby="firstname"
            placeholder="First Name"
            ref={this.firstName}
            required
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            className="form-control"
            id="lastname"
            aria-describedby="lastname"
            placeholder="Last Name"
            ref={this.lastName}
            required
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            className="form-control"
            id="company"
            aria-describedby="company"
            placeholder="Company"
            ref={this.company}
            required
          />
        </div>
        <div className="form-group">
          <input
            type="email"
            className="form-control"
            id="email"
            placeholder="Email"
            ref={this.email}
            required
          />
        </div>
        <Link to="/2" className="btn btn-dark">
          Next Step >>
        </Link>
      </form>
    );
  }
}

export default StepOne;
