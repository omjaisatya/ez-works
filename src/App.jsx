import React from "react";
import ServicesGrid from "./components/ServicesGrid";
import Form from "./components/Form";
import "./App.css";
import logo from "./assets/EZ-Works.png";

function App() {
  return (
    <div className="container">
      <div className="content">
        <div className="content-left">
          <header className="header">
            <img src={logo} alt="home" className="home-img" />
          </header>

          <h2 className="subheading">A Suite Of Business Support Services</h2>
          <p className="description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt...Lorem ipsum dolor sit amet, consectetur
            adipiscing elit, sed
          </p>
        </div>
        <div className="content-right">
          <ServicesGrid />
        </div>
      </div>
      <Form />
    </div>
  );
}

export default App;
