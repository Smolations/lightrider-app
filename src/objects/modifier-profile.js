import { lokiCollections } from '../db';


export default class ModifierProfile {
  get values() {
    return this.modifierValues.map((modifierValue) => {
      const modifier = lokiCollections.MODIFIERS.findOne({ id: modifierValue.modifierId });
      const { $loki, meta, id, ...modifierRest } = modifier;

      return { ...modifierValue, ...modifierRest };
    });
  }


  constructor(options) {
    if (!options.name) {
      throw new Error('Name is required!');
    }

    this.name = options.name;
    this.modifierValues = options.modifierValues || [];
  }

  addValue(modifierId, value) {
    const modifier = lokiCollections.MODIFIERS.find({ id: modifierId });

    if (!modifier) {
      throw new Error(`Unable to find modifier with id: ${modifierId}`);
    }

    const modifierValue = {
      modifierId,
      value,
    };

    const existingModifierValue = this.modifierValues.find(modVal => modVal.modifierId === modifierId);

    this.modifierValues = this.modifierValues.slice();

    if (existingModifierValue) {
      existingModifierValue.value += value;
    } else {
      this.modifierValues.push(modifierValue);
    }

    return this;
  }

  save() {
    const action = this.$loki ? 'update' : 'insert';

    lokiCollections.MODIFIER_PROFILES[action](this);

    return this;
  }
}
