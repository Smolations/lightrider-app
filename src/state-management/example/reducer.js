import Constants from './constants';


export default function Reducer(state, action) {
  const { payload } = action;
  let newState;

  switch (action.type) {
    case Constants.CONSTANT: {
      newState = {
        ...state,
        key: payload,
      };
    } break;

    default:
      newState = state;
  }

  return newState;
}
