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
      const languages = {};

      // previous selection was "2 languages" and new selection differs
      // so we need to reset those languages
      if (state.bonusId === 3 && payload !== 3) {
        languages.languageCategory3Id  = null;
        languages.language3Id  = null;
        languages.languageCategory4Id  = null;
        languages.language4Id  = null;
      }

      newState = {
        ...state,
        ...languages,
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

    case newCharacterConstants.UPDATE_RELIGION: {
      newState = {
        ...state,
        religionId: payload,
      };
    } break;

    case newCharacterConstants.UPDATE_LANGUAGE_CATEGORY: {
      const [languageIndex, languageCategoryId] = payload;
      const languageSuffix = `${languageIndex}Id`;

      newState = {
        ...state,
        [`languageCategory${languageSuffix}`]: languageCategoryId,
        [`language${languageSuffix}`]: null,
      };
    } break;

    case newCharacterConstants.UPDATE_LANGUAGE: {
      const [languageIndex, languageId] = payload;
      const languageKey = `language${languageIndex}Id`;

      newState = {
        ...state,
        [languageKey]: languageId,
      };
    } break;

    default:
      newState = state;
  }

  return newState;
}
