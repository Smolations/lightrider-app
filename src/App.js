import PropTypes from 'prop-types';
import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';
import { Container } from 'semantic-ui-react';

import { Nav } from './components/Nav';
import { CharactersPage, CharacterCreatePage } from './pages/characters';

import { HomePage } from './pages/home';
import { ReferencePage } from './pages/reference';

import logo from './logo.svg';

import './App.scss';


export default function App() {
  return (
    <Router>
      <div className="App">
        <Nav />

        <Container>
          <Switch>
            <Route path="/characters/create">
              <CharacterCreatePage />
            </Route>
            <Route path="/characters">
              <CharactersPage />
            </Route>
            <Route path="/reference">
              <ReferencePage />
            </Route>
            <Route path="/">
              <HomePage />
            </Route>
          </Switch>
        </Container>
      </div>
    </Router>
  );
}
