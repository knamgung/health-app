import React, { Component } from "react";
import Userinfo from "./Userinfo.js";
import Result from "./result";

export default class App extends Component {
  state = {
    sympton: "",
    age: "",
    sex: ""
  };
  render() {
    return (
      <div>
        <Userinfo />
        <Result />
      </div>
    );
  }
}
