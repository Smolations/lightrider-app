import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import { Container } from 'semantic-ui-react';

import { Nav } from './components/Nav';
import { CharactersPage, CharacterCreatePage } from './pages/characters';

import { HomePage } from './pages/home';
import { ReferencePage } from './pages/reference';

import {
  GlobalStateProvider,
  globalInitialState,
  globalReducer,
} from './state-management';


import './App.scss';


export default function App() {
  return (
    <Router>
      <GlobalStateProvider initialState={globalInitialState} reducer={globalReducer}>
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
      </GlobalStateProvider>
    </Router>
  );
}

