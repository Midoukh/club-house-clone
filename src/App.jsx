import React, { useState } from "react";
import Welcome from "./pages/Welcome";
import Plan from "./Layouts/Plan";
import PhoneConfirmation from "./pages/PhoneConfirmation";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        <Plan>
          <Route exact path="/" component={Welcome} />
          <Route exact path="/invite" component={PhoneConfirmation} />
        </Plan>
      </div>
    </Router>
  );
}

export default App;
