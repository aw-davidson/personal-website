import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link} from 'react-router-dom';
import { browserHistory } from 'react-router';
import HomePage from './pages/homePage.js';
import NavBar from './headerComponent/navBar.js';
import Footer from './footerComponent/footer.js';
import Reboot from 'material-ui/Reboot';


class App extends Component {
  render() {
    return (
      <div>
      <Reboot />
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
