import Constants from './constants';


export function update(val) {
  return {
    type: Constants.CONSTANT,
    payload: val,
  };
}

