import omit from 'lodash/omit';

import { lokiCollections } from '../db';

const _inflatedLanguages = Symbol('inflatedLanguages');
const _initialSubattributes = Symbol('initialSubattributes');
const _initialAttributes = Symbol('initialAttributes');


function stripLoki(record) {
  return omit(record, ['$loki', 'meta']);
}


export default class Character {
  get [_initialAttributes]() {
    return lokiCollections.ATTRIBUTES.find().reduce((result, attribute) => {
      return { ...result, [attribute.id]: 5 };
    }, {});
  }

  get [_initialSubattributes]() {
    return lokiCollections.SUBATTRIBUTES.find().reduce((result, subattribute) => {
      return { ...result, [subattribute.id]: 0 };
    }, {});
  }

  get [_inflatedLanguages]() {
    const inflatedLanguages = {};

    for (let [languageIndex, languageIds] of Object.entries(this.languages)) {
      const languageCategoryRecord = lokiCollections.LANGUAGE_CATEGORIES.findOne({ id: languageIds.languageCategoryId });
      const languageRecord = lokiCollections.LANGUAGES.findOne({ id: languageIds.languageId });

      inflatedLanguages[languageIndex] = {
        languageCategory: stripLoki(languageCategoryRecord),
        language: stripLoki(languageRecord),
      };
    }

    return inflatedLanguages;
  }

  get inflated() {
    const foreignKeyCollectionMap = {
      bonusId: 'BONUSES',
      raceId: 'RACES',
      factionId: 'FACTIONS',
      classId: 'CLASSES',
      subclassId: 'SUBCLASSES',
      religionId: 'RELIGIONS',
    };

    const foreignKeys = Object.keys(foreignKeyCollectionMap);
    const inflatedObject = omit(this, [...foreignKeys, 'languages']);

    const foreignKeyed = foreignKeys.reduce((result, foreignKey) => {
      const ownPropertyId = this[foreignKey]; // need to know if a record has been associated
      const inflatedKey = foreignKey.slice(0, -2); // kill 'Id' suffix

      // retrieve record or leave property value as-is
      const record = ownPropertyId
        ? lokiCollections[foreignKeyCollectionMap[foreignKey]].findOne({ id: ownPropertyId })
        : ownPropertyId;

      let inflatedValue = ownPropertyId;

      if (record) {
        inflatedValue = stripLoki(record);
      }

      return { ...result, [inflatedKey]: inflatedValue };
    }, {});

    foreignKeyed.languages = this[_inflatedLanguages];

    return { ...foreignKeyed, ...inflatedObject };
  }


  constructor(options) {
    this.oneShot = options.oneShot || null;
    this.bonusId = options.bonusId || null;
    this.playerName = options.playerName || '';
    this.name = options.name || '';
    this.raceId = options.raceId || null;
    this.factionId = options.factionId || null;
    this.classId = options.classId || null;
    this.subclassId = options.subclassId || null;
    this.religionId = options.religionId || null;
    this.languages = options.languages || {};
    this.attributes = options.attributes || this[_initialAttributes];
    this.subattributes = options.subattributes || this[_initialSubattributes];
    this.sex = options.sex || null;
    this.sexuality = options.sexuality || null;
    this.height = options.height || null;
    this.heightUnits = options.heightUnits || null;
    this.weight = options.weight || null;
    this.weightUnits = options.weightUnits || null;
    this.hairColour = options.hairColour || '';
    this.hairStyle = options.hairStyle || '';
    this.eyeColor = options.eyeColor || '';
    this.ethnicity = options.ethnicity || '';
    this.skinAbnormalities = options.skinAbnormalities || '';
    this.features = options.features || '';
    this.facialHair = options.facialHair || '';
    this.glasses = options.glasses || '';
    this.age = options.age || '';
    this.dayJob = options.dayJob || '';
  }


  setLanguage(languageIndex, languageCategoryId, languageId) {
    this.languages[languageIndex] = { languageCategoryId, languageId };
    return this;
  }

  save() {
    const action = this.$loki ? 'update' : 'insert';

    lokiCollections.CHARACTERS[action](this);

    return this;
  }
}
