import React, { Component } from "react";
import Userinfo from "./Userinfo.js";
import Result from "./result";
import "../styles/app.css";
import axios from "axios";
import { Switch, Route, Link } from "react-router-dom";

const TOKEN =
  "token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJlbWFpbCI6ImtuZ3VuZzk5QGdtYWlsLmNvbSIsInJvbGUiOiJVc2VyIiwiaHR0cDovL3NjaGVtYXMueG1sc29hcC5vcmcvd3MvMjAwNS8wNS9pZGVudGl0eS9jbGFpbXMvc2lkIjoiNTUzOSIsImh0dHA6Ly9zY2hlbWFzLm1pY3Jvc29mdC5jb20vd3MvMjAwOC8wNi9pZGVudGl0eS9jbGFpbXMvdmVyc2lvbiI6IjIwMCIsImh0dHA6Ly9leGFtcGxlLm9yZy9jbGFpbXMvbGltaXQiOiI5OTk5OTk5OTkiLCJodHRwOi8vZXhhbXBsZS5vcmcvY2xhaW1zL21lbWJlcnNoaXAiOiJQcmVtaXVtIiwiaHR0cDovL2V4YW1wbGUub3JnL2NsYWltcy9sYW5ndWFnZSI6ImVuLWdiIiwiaHR0cDovL3NjaGVtYXMubWljcm9zb2Z0LmNvbS93cy8yMDA4LzA2L2lkZW50aXR5L2NsYWltcy9leHBpcmF0aW9uIjoiMjA5OS0xMi0zMSIsImh0dHA6Ly9leGFtcGxlLm9yZy9jbGFpbXMvbWVtYmVyc2hpcHN0YXJ0IjoiMjAxOS0wOC0wOSIsImlzcyI6Imh0dHBzOi8vc2FuZGJveC1hdXRoc2VydmljZS5wcmlhaWQuY2giLCJhdWQiOiJodHRwczovL2hlYWx0aHNlcnZpY2UucHJpYWlkLmNoIiwiZXhwIjoxNTY1Mzk5OTMwLCJuYmYiOjE1NjUzOTI3MzB9.ghaps724WiADhRnvxhbsxqa-CrKvngYjUkhyWFW0QNE";
const APIURLDiag = "https://sandbox-healthservice.priaid.ch/diagnosis?";
const APIURLSymp = "https://sandbox-healthservice.priaid.ch/symptoms?";
const APILANG = "language=en-gb";

export default class App extends Component {
  state = {
    results: null,
    symptoms: null,
    isLoading: true
  };

  componentDidMount() {
    axios.get(`${APIURLSymp}${TOKEN}&${APILANG}`).then(response => {
      this.setState({
        symptoms: response.data,
        isLoading: false
      });
    });
  }

  createSymptoms = () => {};

  getData = infoObj => {
    console.log("hi");
    axios
      .get(
        `${APIURLDiag}${TOKEN}&${APILANG}&symptoms=[${
          infoObj.symptom
        }]&year_of_birth=${infoObj.age}&gender=${infoObj.sex}`
      )
      .then(response => {
        console.log(response.data);
        this.setState({
          results: response.data
        });
      });
  };

  render() {
    return (
      <div>
        {this.state.isLoading ? (
          <h5>Loading</h5>
        ) : (
          <Route
            path="/"
            exact
            render={() => {
              console.log(this.state.results == null);
              if (this.state.results === null) {
                return (
                  <div>
                    <Userinfo
                      getData={this.getData}
                      symptoms={this.state.symptoms}
                    />
                  </div>
                );
              } else {
                return (
                  <div>
                    <Userinfo
                      getData={this.getData}
                      symptoms={this.state.symptoms}
                    />
                    <Result results={this.state.results} />
                  </div>
                );
              }
            }}
          />
        )}
      </div>
    );
  }
}
