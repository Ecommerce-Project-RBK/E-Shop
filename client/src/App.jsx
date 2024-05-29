import "./App.css";
import React from "react";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import Home from './home/home';
import 'bootstrap/dist/css/bootstrap.min.css';  // Import Bootstrap CSS
import NavBar from "./products/nav";
function App() {
  return (
    <Router>
    <NavBar/>
      <div className="main-content">
        <Routes>
          <Route path="/" element={<Navigate to="/home" />} />
          <Route path="/home" element={<Home />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
