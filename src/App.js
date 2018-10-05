import React, {Component} from 'react';

import './App.css';
import 'semantic-ui-css/semantic.min.css';

import {Route, Switch} from 'react-router-dom';
import {Container,} from 'semantic-ui-react'

import MoviesPage from './components/pages/MoviesPage';
import Footer from './components/Footer';
import Header from './components/Header';

class App extends Component {
  state = {};

  render() {
    return (
      <div className="App">
        <Header/>

        <Container text>
          <Switch>
            <Route path='/movies' exact component={MoviesPage}/>
          </Switch>
        </Container>

        <Footer/>
      </div>
    );
  }
}

export default App;
