import characters from './characters';
import races from './races';
import factions from './factions';
import religions from './religions';
import languageCategories from './language-categories';
import languages from './languages';
import knowledgeCategories from './knowledge-categories';
import knowledge from './knowledge';
import connectionCategories from './connection-categories';
import connections from './connections';
import classes from './classes';
import subclasses from './subclasses';
import attributes from './attributes';
import subattributes from './subattributes';
import skills from './skills';
import subskills from './subskills';
import bonuses from './bonuses';

import modifiers from './modifiers';
import modifierProfiles from './modifier-profiles';

// loki record prototypes
import Character from '../../models/character';
import ModifierProfile from '../../models/modifier-profile';


export default {
  CHARACTERS: {
    name: 'characters',
    collectionOptions: {},
    dbOptions: { characters: { proto: Character } },
    data: characters
  },
  RACES: {
    name: 'races',
    collectionOptions: { unique: ['id'] },
    dbOptions: {},
    data: races
  },
  FACTIONS: {
    name: 'factions',
    collectionOptions: { unique: ['id'] },
    dbOptions: {},
    data: factions,
  },
  RELIGIONS: {
    name: 'religions',
    collectionOptions: { unique: ['id'] },
    dbOptions: {},
    data: religions,
  },
  LANGUAGE_CATEGORIES: {
    name: 'languageCategories',
    collectionOptions: { unique: ['id'] },
    dbOptions: {},
    data: languageCategories,
  },
  LANGUAGES: {
    name: 'languages',
    collectionOptions: { unique: ['id'] },
    dbOptions: {},
    data: languages,
  },
  KNOWLEDGE_CATEGORIES: {
    name: 'knowledgeCategories',
    collectionOptions: { unique: ['id'] },
    dbOptions: {},
    data: knowledgeCategories,
  },
  KNOWLEDGE: {
    name: 'knowledge',
    collectionOptions: { unique: ['id'] },
    dbOptions: {},
    data: knowledge,
  },
  CONNECTION_CATEGORIES: {
    name: 'connectionCategories',
    collectionOptions: { unique: ['id'] },
    dbOptions: {},
    data: connectionCategories,
  },
  CONNECTIONS: {
    name: 'connections',
    collectionOptions: { unique: ['id'] },
    dbOptions: {},
    data: connections,
  },
  CLASSES: {
    name: 'classes',
    collectionOptions: { unique: ['id'] },
    dbOptions: {},
    data: classes,
  },
  SUBCLASSES: {
    name: 'subclasses',
    collectionOptions: { unique: ['id'] },
    dbOptions: {},
    data: subclasses,
  },
  ATTRIBUTES: {
    name: 'attributes',
    collectionOptions: { unique: ['id'] },
    dbOptions: {},
    data: attributes,
  },
  SUBATTRIBUTES: {
    name: 'subattributes',
    collectionOptions: { unique: ['id'] },
    dbOptions: {},
    data: subattributes,
  },
  SKILLS: {
    name: 'skills',
    collectionOptions: { unique: ['id'] },
    dbOptions: {},
    data: skills,
  },
  SUBSKILLS: {
    name: 'subskills',
    collectionOptions: { unique: ['id'] },
    dbOptions: {},
    data: subskills,
  },
  BONUSES: {
    name: 'bonuses',
    collectionOptions: { unique: ['id'] },
    dbOptions: {},
    data: bonuses,
  },
  MODIFIERS: {
    name: 'modifiers',
    collectionOptions: { unique: ['id'] },
    dbOptions: {},
    data: modifiers,
  },
  MODIFIER_PROFILES: {
    name: 'modifierProfiles',
    collectionOptions: {},
    dbOptions: { modifierProfiles: { proto: ModifierProfile } },
    data: modifierProfiles,
  },
};
