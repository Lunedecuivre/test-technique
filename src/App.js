import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Accueil from "./components/Accueil";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
function App() {
  return (
    <Router>
      <div className="App">
        <Accueil />
      </div>
    </Router>
  );
}

export default App;
