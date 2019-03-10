import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './pages/Home';
// import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

import createHistory from 'history/createBrowserHistory';
import Login from './pages/Login';
import Blog from './pages/Blog';
import Create from './pages/Create';
import Edit from './pages/Edit';
import Show from './pages/Show';
import Page404 from './pages/Page404';

class App extends Component {
  render() {
    // const store = configureStore({ history });
    return (
      <div className="App">
        {/* <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header> */}
        <Router
        basename={process.env.PUBLIC_URL}
         >
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/login" component={Login} />
            <Route path="/blog" component={Blog} />
            <Route path="/create" component={Create} />
            <Route path="/edit/:id" component={Edit} />
            <Route path="/show/:id" component={Show} />
            <Route component={() => <Page404 />} />
          </Switch>
        </Router>
      </div>

    );
  }
}

export default App;
