import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Navbar from './component/layout/Navbar';
import Home from './component/Pages/Home';
import Alert from './component/layout/Alert';
import About from './component/Pages/About';
import User from './component/Users/User';
import GithubState from './component/Context/gitHub/GithubState';
import AlertState from './component/Context/alert/AlertState';
import NotFound from './component/layout/Notfound';

const App = () => {
  return (
    <GithubState>
      <AlertState>
        <Router>
          <div className="App">
            <Navbar title="Github Finder" />
            <div className="container">
              <Alert />
              <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/about" component={About} />
                <Route exact path="/user/:login" component={User} />
                <Route component={NotFound} />
              </Switch>
            </div>
          </div>
        </Router>
      </AlertState>
    </GithubState>
  );
};

export default App;
