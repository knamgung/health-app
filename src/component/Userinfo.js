import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Userinfo extends Component {
  state = {
    symptom: null,
    age: null,
    sex: null
  };

  handleChange = event => {
    if (event.target.name === "age") {
      this.setState({
        [event.target.name]: 2019 - event.target.value
      });
    } else {
      this.setState({
        [event.target.name]: event.target.value
      });
    }
  };

  handleSubmit = event => {
    event.preventDefault();
    console.log(this.state);
    this.props.getData(this.state);
    event.target.reset();
  };

  render() {
    return (
      <div className="info">
        <div>
          <h1 className="info-title">HEALTH PROBLEMS?</h1>
        </div>
        <div>
          <h5 className="info-sub">
            Fill out the information to see your LEAST likely diagnosis{" "}
          </h5>
        </div>
        <form className="info__form" onSubmit={this.handleSubmit}>
          <div>
            <span>SYMPTOM</span>

            <select onChange={this.handleChange} name="symptom">
              <option value="undefined">None</option>
              <Selection symptoms={this.props.symptoms} />
            </select>
          </div>
          <div class="info__nameSex">
            <div className="age-cont">
              <h4 className="age">AGE</h4>
              <input type="text" name="age" onChange={this.handleChange} />
            </div>
            <div className="sex">
              <h4>SEX</h4>
              <select
                className="info-sex"
                onChange={this.handleChange}
                name="sex"
              >
                <option value="undefined">None</option>
                <option value="Male">Male</option>
                <option value="Male">Female</option>
              </select>
            </div>
          </div>

          <button>Submit</button>
        </form>
        <div />
      </div>
    );
  }
}

function Selection(props) {
  const symptomOpt = () => {
    if (props.symptoms === undefined) {
    } else {
      return props.symptoms.map(symptom => {
        return <option value={symptom.ID}>{symptom.Name}</option>;
      });
    }
  };

  return symptomOpt();
}
