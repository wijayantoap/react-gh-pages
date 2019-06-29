import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
// import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

import createHistory from 'history/createBrowserHistory';
import AboutMe from './pages/AboutMe';
import MarqueeText from './pages/MarqueeText';
import Programming from './pages/Programming';
import Show from './pages/Show';
import Page404 from './pages/Page404';
import AOS from 'aos';
import 'aos/dist/aos.css';

class App extends Component {
  componentDidMount(){
    AOS.init({
      duration : 1200
    })
  }

  componentWillReceiveProps (){ 
    AOS.refresh(); 
  } 

  render() {
    return (
      <div className="App">
        <Router
        basename={process.env.PUBLIC_URL}
         >
          <Switch>
            <Route path="/aboutme" component={AboutMe} />
            <Route path="/marqueetext" component={MarqueeText} />
            <Route exact path="/" component={Programming} />
            <Route path="/programming" component={Programming} />
            <Route path="/show/:id" component={Show} />
            <Route component={() => <Page404 />} />
          </Switch>
        </Router>
      </div>

    );
  }
}

export default App;
