import attributesConstants from './constants';


export function update(val) {
  return {
    type: attributesConstants.CONSTANT,
    payload: val,
  };
}

