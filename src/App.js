import React, { Component, Fragment } from 'react';
import logo from './logo.svg';
import './assets/scss/main.scss';
import './assets/css/flag-icon/css/flag-icon.css'
import { Switch, Route } from 'react-router-dom';

import Topbar from './components/Header/topbar';
import Header from './components/Header/header';
import Main from './components/Main';
import Footer from './components/Footer/footer';
class App extends Component {
  render() {
    return (
      <Switch>
        <Fragment>
          <Topbar />
          <Header />
          <Main />
          <Footer />
        </Fragment>
      </Switch>
    );
  }
}

export default App;
