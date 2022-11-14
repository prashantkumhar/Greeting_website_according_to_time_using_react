import React from "react";
import ReactDom from "react-dom";
import "./styles.css";

const cssStyle = {};
let greeting = "";
const d = new Date();
const x = d.getHours();
if (x >= 1 && x < 12) {
  greeting = "Good Morning";
  cssStyle.color = "green";
} else if (x >= 12 && x < 19) {
  greeting = "Good Afternoon";
  cssStyle.color = "orange";
} else {
  greeting = "Good night";
  cssStyle.color = "red";
}
ReactDom.render(
  <>
    <div>
      <h1>
        Hello sir, <span style={cssStyle}> {greeting}</span>{" "}
      </h1>
    </div>
  </>,
  document.getElementById("root")
);
