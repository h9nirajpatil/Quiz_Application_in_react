// Filename - App.js

import React from "react";
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import Weatherapp from "./components/Weatherapp";
import Contact from "./components/Contact";
import Quiz from "./components/Quiz";

function App() {
  return (
    <>
      <BrowserRouter>
        <div
          style={{
            display: "flex",
            background: "black",
            padding: "5px 0 5px 5px",
            fontSize: "20px",
          }}
        >
          <div style={{ margin: "10px" }}>
            <NavLink
              to="/"
              style={({ isActive }) => ({
                color: isActive ? "greenyellow" : "white",
              })}
            >
              Quiz Application
            </NavLink>
          </div>
          <div style={{ margin: "10px" }}>
            <NavLink
              to="/Weatherapp"
              style={({ isActive }) => ({
                color: isActive ? "greenyellow" : "white",
              })}
            >
              Weather App
            </NavLink>
          </div>
          <div style={{ margin: "10px" }}>
            <NavLink
              to="/contact"
              style={({ isActive }) => ({
                color: isActive ? "greenyellow" : "white",
              })}
            >
              Contact
            </NavLink>
          </div>
        </div>
        <Routes>
          <Route exact path="/" element={<Quiz />} />
          <Route exact path="/Weatherapp" element={<Weatherapp />} />
          <Route exact path="/contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
