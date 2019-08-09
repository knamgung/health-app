import React from "react";

export default function Userinfo() {
  return (
    <div>
      <div>
        <body>
          <div>
            <h1>HEALTH PROBLEMS?</h1>
          </div>
          <div>
            <h5>
              Fill out the information to see the lowest possible diagonoses{" "}
            </h5>
          </div>
          <form>
            <span>SYMPTON</span>
            <div>
              <select>
                <option>red eyes</option>
              </select>
              <div>AGE</div>
              <input type="text" name="ageInput" />
              <div>SEX</div>
              <input type="text" name="sexInput" />
            </div>
            <button>Submit</button>
          </form>
          <div />
        </body>
      </div>
    </div>
  );
}
