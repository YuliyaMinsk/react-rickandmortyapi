import React from "react";
import { Link, Outlet } from "react-router-dom";
import logo from "./logo.svg";
import "./App.scss";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="_container header-container">
          <a href="/" className="logo">
            <span className="logo-image"></span>
          </a>
          <nav>
            <Link to="/about-us">About Us</Link>
          </nav>
        </div>
      </header>

      <main>
        <div className="_container main-container">
          <Outlet />
          <img src={logo} className="App-logo" alt="logo" />
        </div>
      </main>
    </div>
  );
}

export default App;
