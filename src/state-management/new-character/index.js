import PropTypes from 'prop-types';
import React, {
  createContext,
  useContext,
  useReducer,
} from 'react';

import * as newCharacterActions from './actions';


const NewCharacterStateContext = createContext();


// for convenience, re-export other state stuff here
export { default as newCharacterInitialState } from './initial-state';
export { default as newCharacterReducer } from './reducer';
export { newCharacterActions };

// grab this within components to access state
export const useNewCharacterStateValue = () => useContext(NewCharacterStateContext);


// main export used to wrap other components to make them state-aware
export const NewCharacterStateProvider = ({
  reducer, initialState, children,
}) => (
  <NewCharacterStateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </NewCharacterStateContext.Provider>
);


// boilerplate; will be the same for any hook-based, localized state files
NewCharacterStateProvider.propTypes = {
  children: PropTypes.object.isRequired,
  initialState: PropTypes.object.isRequired,
  reducer: PropTypes.func.isRequired,
};
