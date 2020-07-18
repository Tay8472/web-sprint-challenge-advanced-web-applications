import React, { useState } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Private from './Private';
import BubblePage from './components/BubblePage';

import Login from "./components/Login";
import "./styles.scss";

function App() {
  return (
    <Router>
      <div className="App">
        <Link to="/protected">stuff you can't see</Link>
        <Route exact path="/" component={Login} />
        {/* 
          Build a PrivateRoute component that will 
          display BubblePage when you're authenticated 
        */}
        <Private path="/protected" component={BubblePage}/>
      </div>
    </Router>
  );
}

export default App;
