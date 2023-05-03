import "./App.css";
import About from "./components/About";
import Alert from "./components/Alert";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import { useState } from "react";
import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light"); // whether dark mode is enabled or not

  const [alertType, setAlertType] = useState(null);
  const [alertMsg, setAlertMsg] = useState(null);

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#042743";
      document.body.style.color = "white";
      setAlertType("success");
      setAlertMsg("Dark Mode has been enabled");
      setTimeout(() => {
        setAlertType(null);
      }, 2000);

      document.title = "TextUtils - DarkMode";
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      document.body.style.color = "black";
      setAlertType("warning");
      setAlertMsg("Light Mode has been enabled");
      setTimeout(() => {
        setAlertType(null);
      }, 2000);
      document.title = "TextUtils - LightMode";
    }
  };

  return (
    <>
      <BrowserRouter>
        <Navbar
          title="TextUtils"
          aboutText="About Us"
          mode={mode}
          toggleMode={toggleMode}
        />
        {alertType ? <Alert alertType={alertType} alertMsg={alertMsg} /> : null}
        <div className="container my-2">
          <Routes>
            <Route exact path="/about" element={<About />} />
            <Route
              exact
              path="/"
              element={
                <TextForm heading="Enter the text to analyze" mode={mode} />
              }
            />
          </Routes>
        </div>
        {/* <div className="container my-2">
          <About />
        </div> */}
      </BrowserRouter>
    </>
  );
}
export default App;
