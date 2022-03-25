import "./App.css";
// import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import React, { useState } from "react";
import Alert from "./components/Alert";

// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
// } from "react-router-dom";


function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 3000);
  };

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      // document.body.style.backgroundColor = 'grey';
      document.body.style.background =
        "linear-gradient(28deg,rgb(0,0,0), rgb(162,162,162))";
      showAlert("Dark mode has been enabled", "success");
      document.title = "Textutils - Dark Mode";
    } else {
      setMode("light");
      // document.body.style.backgroundColor = 'white';
      document.body.style.background =
        "linear-gradient(rgb(255,255,255), rgb(255,255,255))";
      showAlert("Light mode has been enabled", "success");
      document.title = "Textutils - Light Mode";
    }
  };
  return (
    <>
      {/* <Navbar/> */}
      {/* <Router> */}
      <Navbar title="TextUtils" aboutText={"about"} mode={mode} toggleMode={toggleMode}/>
      <Alert alert={alert} />
      <div className="container my-3">
      {/* <Routes>
          <Route exact path="/about"  element={<About mode={mode}/>}></Route>
          
          <Route exact path="/"  element={<TextForm showAlert={showAlert} heading="Enter the text to analyze below" mode={mode}/>}></Route>

      </Routes> */}
      <TextForm showAlert={showAlert} heading="Enter the text to analyze below" mode={mode} />
      </div>
      {/* </Router> */}
    </>
  );
}

export default App;
