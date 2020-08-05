import PropTypes from 'prop-types';
import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';
import { Container } from 'semantic-ui-react';

import { Home } from '../Home';
import { Nav } from '../Nav';
import { Reference } from '../Reference';

import logo from './logo.svg';

import './App.scss';


export default function App() {
  return (
    <Router>
      <div className="App">
        <Nav />

        <Container>
          <Switch>
            <Route path="/reference">
              <Reference />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </Container>
      </div>
    </Router>
  );
}
