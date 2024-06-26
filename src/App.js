import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import NoteState from "./context/notes/NoteState";
import Alert from "./components/Alert";
import Login from "./components/login/Login";
import Signup from "./components/login/Signup";
import { useState } from "react";
import Profile from "./Profile";

function App() {
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
     setAlert({
      msg: message,
      type: type
     })
     setTimeout(() => {
      setAlert(null)
     }, 1000);
  }
  return (
    <>
    <NoteState>
      <Router>
        <Navbar />
        <Alert alert={alert}/>
        <div className="container" style={{padding:"4rem"}}>
        <Routes>
          <Route exact path="/" element={<Home showAlert={showAlert}/>} />
          <Route exact path="/login" element={<Login showAlert={showAlert} />} />
          <Route exact path="/signup" element={<Signup showAlert={showAlert} />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/profile" element={<Profile />} />
        </Routes>
        </div>
      </Router>
    </NoteState>
    </>
  );
}

export default App;
