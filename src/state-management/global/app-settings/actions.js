import AppSettingsConstants from './constants';


export function set(settings) {
  return {
    type: AppSettingsConstants.SET,
    payload: settings,
  };
}

