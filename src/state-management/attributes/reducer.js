import attributesConstants from './constants';


export default function attributesReducer(state, action) {
  const { payload } = action;
  let newState;

  switch (action.type) {
    case attributesConstants.CONSTANT: {
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
