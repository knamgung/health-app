import React from "react";

export default function result(props) {
  // const resultspecialisation=props.results[result.length-1].map=>{result=>{
  //  return{
  //    <
  //  }
  // })
  if (props.results === []) {
    return (
      <div>
        <h3>You're FINE</h3>
      </div>
    );
  } else {
    return (
      <div className="res">
        <div className="result">
          <span className="result-text">RESULT</span>
          <br />
          <LeastLikeResult results={props.results} />

          <div>
            <h3 className="result-advise">Paranoid?</h3>Talk to a specialist
            <ul>
              <Special results={props.results} />
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

function LeastLikeResult(props) {
  console.log(props.results);
  const resultLeastLikely = () => {
    if (props.results.length < 1) {
      return (
        <div className="stats">
          <h4 className="issue">{props.results[0].Issue.Name}</h4>
          <h4 className="percentage">{`${
            props.results[0].Issue.Accuracy
          }%`}</h4>
        </div>
      );
    } else {
      return (
        <div className="stats">
          <h4 className="issue">
            {props.results[props.results.length - 1].Issue.Name}
          </h4>
          <h4 className="percentage">{`${Math.floor(
            props.results[props.results.length - 1].Issue.Accuracy
          )}%`}</h4>
        </div>
      );
    }
  };
  return resultLeastLikely();
}

function Special(props) {
  console.log("This Special Function", props.results);
  const specList = () => {
    if (props.results.length < 1) {
      return props.results[0].Specialisation.map(special => {
        return <li>{special.Name}</li>;
      });
    } else {
      return props.results[props.results.length - 1].Specialisation.map(
        special => {
          return <li>{special.Name}</li>;
        }
      );
    }
  };

  return specList();
}
