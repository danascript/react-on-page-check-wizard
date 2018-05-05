import React, { Component } from "react";
import Axios from "axios";
import jsPDF from "jspdf";
import onPageCheck from "./../modules/onPageCheck";

class StepThree extends Component {
  state = {
    loading: true,
    results: {}
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

    this.setState(state => {
      state.results = onPageCheck(response.data);
      state.loading = false;
      return state;
    });
  }

  printPDF = e => {
    e.preventDefault();

    const pdf = new jsPDF({
      orientation: "p",
      unit: "mm",
      format: "a4"
    });

    const source = document.querySelector(".form-group");

    pdf.fromHTML(source, 15, 15);

    // pdf.text(`On Page Check for ${this.props.url}`, 35, 25);
    pdf.save("PageCheckReport.pdf");
  };

  render() {
    return (
      <form>
        <div className="form-group">
          <h2>Here is the result for '{this.props.url}'</h2>
          {this.state.loading === true && <h5>Loading...</h5>}
          {this.state.loading === false && (
            <div className="container card for-pdf">
              <h5>Title:</h5>
              <p>
                <b>Passed:</b>{" "}
                {this.state.results.title.passed ? (
                  <span className="green">Yes</span>
                ) : (
                  <span className="red">No</span>
                )}
              </p>
              <p>
                <b>Message:</b> {this.state.results.title.message}
              </p>
              <br />
              <h5>Description:</h5>
              <p>
                <b>Passed:</b>{" "}
                {this.state.results.meta.description.passed ? (
                  <span className="green">Yes</span>
                ) : (
                  <span className="red">No</span>
                )}
              </p>
              <p>
                <b>Message:</b> {this.state.results.meta.description.message}
              </p>
            </div>
          )}
          <br />
          <button
            onClick={this.printPDF}
            type="submit"
            className="btn btn-dark"
          >
            Download
          </button>
        </div>
      </form>
    );
  }
}

export default StepThree;
