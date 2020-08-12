import uniqueId from 'lodash/uniqueId';

import dbs from '../db';

const _modifierProfilesCollection = Symbol('modifierProfilesCollection');
const _modifiersCollection = Symbol('modifiersCollection');


export default class ModifierProfile {
  // get modifierTotals() {}


  constructor(options) {
    if (!options.name) {
      throw new Error('Name is required!');
    }

    this.name = options.name;
    this.modifierValues = options.modifierValues || [];

    this[_modifierProfilesCollection] = dbs.MODIFIER_PROFILES;
    this[_modifiersCollection] = dbs.MODIFIERS;
  }

  // toJSON() {}

  addValue(modifierId, value) {
    const modifier = this[_modifiersCollection].find({ id: modifierId });

    if (!modifier) {
      throw new Error(`Unable to find modifier with id: ${modifierId}`);
    }

    const modifierValue = {
      modifierId,
      value,
    };

    const existingModifierValue = this.modifierValues.find(modVal => modVal.modifierId === modifierId);

    if (existingModifierValue) {
      existingModifierValue.value += value;
      this.modifierValues = this.modifierValues.slice();
    } else {
      this.modifierValues.push(modifierValue);
    }

    return this;
  }

  save() {
    // const action = this.$loki ? 'update' : 'insert';

    // this[_modifierProfile] = this.modifierProfilesCollection[action](this[_modifierProfile]);

    // return this[_modifierProfile];
  }
}
