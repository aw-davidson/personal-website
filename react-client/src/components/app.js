import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import HomePage from './pages/homePage.js';


class App extends Component {
  render() {
    return (
      <div>
      <Router>
        <div>
          <Route name="home" exact path="/" component={HomePage} />
        </div>
      </Router>
      </div>
    )
  }
}

export default App;
