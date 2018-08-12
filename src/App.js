import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Nav from "./components/Nav";
import button from "./components/button";
import MainArea from "./components/MainArea";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to First Reactstrap</h1>
        </header>
        <button />
        <Nav />
        <MainArea />
      </div>
    );
  }
}

export default App;
