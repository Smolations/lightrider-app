import newCharacterConstants from './constants';


export default function newCharacterReducer(state, action) {
  const { payload } = action;
  let newState;

  switch (action.type) {
    case newCharacterConstants.UPDATE_ONE_SHOT: {
      newState = {
        ...state,
        oneShot: payload,
      };
    } break;

    case newCharacterConstants.UPDATE_BONUS: {
      newState = {
        ...state,
        bonusId: payload,
      };
    } break;

    case newCharacterConstants.UPDATE_PLAYER_NAME: {
      newState = {
        ...state,
        playerName: payload,
      };
    } break;

    case newCharacterConstants.UPDATE_NAME: {
      newState = {
        ...state,
        name: payload,
      };
    } break;

    case newCharacterConstants.UPDATE_RACE: {
      newState = {
        ...state,
        raceId: payload,
        factionId: null,
      };
    } break;

    case newCharacterConstants.UPDATE_FACTION: {
      newState = {
        ...state,
        factionId: payload,
      };
    } break;

    case newCharacterConstants.UPDATE_CLASS: {
      newState = {
        ...state,
        classId: payload,
        subclassId: null,
      };
    } break;

    case newCharacterConstants.UPDATE_SUBCLASS: {
      newState = {
        ...state,
        subclassId: payload,
      };
    } break;

    default:
      newState = state;
  }

  return newState;
}
