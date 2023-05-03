import React, { useState } from "react";

export default function TextForm(props) {
  const handleUpClick = () => {
    console.log("Uppercase was clicked" + text);
    let newText = text.toUpperCase();

    setText(newText);
  };

  const handleDownClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
  };

  const handleOnChange = (event) => {
    console.log("handleOnChange was clicked");
    setText(event.target.value);
  };

  const handleClearClick = () => {
    let newText = "";
    setText(newText);
  };

  const handleCopy = () => {
    var text = document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
  };

  const handleExtraSpace = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
  };

  const [text, setText] = useState("");

  return (
    <>
      <div className="container">
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            onChange={handleOnChange}
            style={{
              backgroundColor: props.mode === "dark" ? "grey" : "white",
            }}
            id="myBox"
            rows="5"
          ></textarea>
        </div>
        <button className="btn btn-primary mx-1" onClick={handleUpClick}>
          Convert to UpperCase
        </button>
        <button className="btn btn-primary mx-1" onClick={handleDownClick}>
          Convert to LowerCase
        </button>
        <button className="btn btn-primary mx-1" onClick={handleClearClick}>
          Clear
        </button>
        <button className="btn btn-primary mx-1" onClick={handleCopy}>
          Copy Text
        </button>
        <button className="btn btn-primary mx-1" onClick={handleExtraSpace}>
          Remove Extra Spaces
        </button>
      </div>
      <div className="container my-1">
        <h2> Your Text Summary</h2>
        {/* <p>
          {text.split(" ").length} words and {text.length}characters
         <br></br>{0.008 * text.split(" ").length}Minutes Read. </p> */}
        {/* <p>{text.trim()===""?'0' : text.trim().split("").length} words and {text.length} characters.</p> */}
        <p>
          {text.trim() === "" ? "0" : text.split(" ").length} words and{" "}
          {text.length}characters
          <br></br>
          {0.008 * text.split(" ").length}Minutes Read.
        </p>
      </div>
      <div className="container my-1">
        <h3>Preview</h3>
        <p>
          {text.length > 0
            ? text
            : "Enter something in the textbox above to preview it here."}
        </p>
      </div>
    </>
  );
}
