import isEmpty from 'lodash/isEmpty';
import React, { useLayoutEffect } from 'react';
import {
  Switch,
  Route,
} from 'react-router-dom';
import { Container } from 'semantic-ui-react';

import { CharactersPage, CharacterCreatePage } from '../../pages/characters';
import { HomePage } from '../../pages/home';
import { ReferencePage } from '../../pages/reference';

import {
  appSettingsActions,
  useGlobalStateValue,
} from '../../state-management';
import {
  NewCharacterStateProvider,
  newCharacterInitialState,
  newCharacterReducer,
} from '../../state-management/new-character';

import { lokiCollections } from '../../db';

import { Nav } from '../Nav';

import './App.scss';


export default function App() {
  const [{ appSettings }, dispatch] = useGlobalStateValue();
  console.log('[App] appSettings: %o', appSettings);

  useLayoutEffect(() => {
    // choose appropriate settings (default by default)
    const settings = lokiCollections.APP_SETTINGS.findOne({ id: 1 });

    dispatch(appSettingsActions.set(settings));
  }, [dispatch]);


  return isEmpty(appSettings)
    ? null
    : (
      <div className="App">
        <Nav />

        <Container>
          <Switch>
            <Route path="/characters/create">
              <NewCharacterStateProvider initialState={newCharacterInitialState} reducer={newCharacterReducer}>
                <CharacterCreatePage />
              </NewCharacterStateProvider>
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
    );
}

App.displayName = 'App';
