import newCharacterConstants from './constants';


export function updateNewCharacterOneShot(isOneShot) {
  return {
    type: newCharacterConstants.UPDATE_ONE_SHOT,
    payload: isOneShot,
  };
}

export function updateNewCharacterBonusId(bonusId) {
  return {
    type: newCharacterConstants.UPDATE_BONUS,
    payload: bonusId,
  };
}

export function updateNewCharacterPlayerName(newName) {
  return {
    type: newCharacterConstants.UPDATE_PLAYER_NAME,
    payload: newName,
  };
}

export function updateNewCharacterName(newName) {
  return {
    type: newCharacterConstants.UPDATE_NAME,
    payload: newName,
  };
}

export function updateNewCharacterRaceId(raceId) {
  return {
    type: newCharacterConstants.UPDATE_RACE,
    payload: raceId,
  };
}

export function updateNewCharacterFactionId(factionId) {
  return {
    type: newCharacterConstants.UPDATE_FACTION,
    payload: factionId,
  };
}

export function updateNewCharacterClassId(classId) {
  return {
    type: newCharacterConstants.UPDATE_CLASS,
    payload: classId,
  };
}

export function updateNewCharacterSubclassId(subclassId) {
  return {
    type: newCharacterConstants.UPDATE_SUBCLASS,
    payload: subclassId,
  };
}

export function updateNewCharacterReligionId(religionId) {
  return {
    type: newCharacterConstants.UPDATE_RELIGION,
    payload: religionId,
  };
}

export function updateNewCharacterLanguageCategoryId(languageIndex, languageCategoryId) {
  return {
    type: newCharacterConstants.UPDATE_LANGUAGE_CATEGORY,
    payload: [languageIndex, languageCategoryId],
  };
}

export function updateNewCharacterLanguageId(languageIndex, languageId) {
  return {
    type: newCharacterConstants.UPDATE_LANGUAGE,
    payload: [languageIndex, languageId],
  };
}

