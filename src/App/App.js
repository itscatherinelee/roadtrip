import React, { Component } from 'react';
import {BrowserRouter} from 'react-router-dom';
import LandingPage from "./LandingPage/LandingPage.js";

class App extends Component {
  render() {
    <BrowserRouter>
      <Route exact path ="/" componenet = {LandingPage} />
    </BrowserRouter>
  }
}

export default App;
