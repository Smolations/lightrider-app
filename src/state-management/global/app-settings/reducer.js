import AppSettingsConstants from './constants';


export default function AppSettingsReducer(state, action) {
  const { payload } = action;
  let newState;

  switch (action.type) {
    case AppSettingsConstants.SET:
      newState = {
        ...state,
        ...payload,
      };
      break;

    default:
      newState = state;
  }

  return newState;
}
