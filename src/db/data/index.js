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
import Attribute from '../../models/attribute';
import Bonus from '../../models/bonus';
import Character from '../../models/character';
import Class from '../../models/class';
import Connection from '../../models/connection';
import ConnectionCategory from '../../models/connection-category';
import Faction from '../../models/faction';
import Knowledge from '../../models/knowledge';
import KnowledgeCategory from '../../models/knowledge-category';
import Language from '../../models/language';
import LanguageCategory from '../../models/language-category';
import Modifier from '../../models/modifier';
import ModifierProfile from '../../models/modifier-profile';
import Race from '../../models/race';
import Religion from '../../models/religion';
import Skill from '../../models/skill';
import Subattribute from '../../models/subattribute';
import Subclass from '../../models/subclass';
import Subskill from '../../models/subskill';


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
    dbOptions: { races: { proto: Race } },
    data: races
  },
  FACTIONS: {
    name: 'factions',
    collectionOptions: { unique: ['id'] },
    dbOptions: { factions: { proto: Faction } },
    data: factions,
  },
  RELIGIONS: {
    name: 'religions',
    collectionOptions: { unique: ['id'] },
    dbOptions: { religions: { proto: Religion } },
    data: religions,
  },
  LANGUAGE_CATEGORIES: {
    name: 'languageCategories',
    collectionOptions: { unique: ['id'] },
    dbOptions: { languageCategories: { proto: LanguageCategory } },
    data: languageCategories,
  },
  LANGUAGES: {
    name: 'languages',
    collectionOptions: { unique: ['id'] },
    dbOptions: { languages: { proto: Language } },
    data: languages,
  },
  KNOWLEDGE_CATEGORIES: {
    name: 'knowledgeCategories',
    collectionOptions: { unique: ['id'] },
    dbOptions: { knowledgeCategories: { proto: KnowledgeCategory } },
    data: knowledgeCategories,
  },
  KNOWLEDGE: {
    name: 'knowledge',
    collectionOptions: { unique: ['id'] },
    dbOptions: { knowledge: { proto: Knowledge } },
    data: knowledge,
  },
  CONNECTION_CATEGORIES: {
    name: 'connectionCategories',
    collectionOptions: { unique: ['id'] },
    dbOptions: { connectionCategories: { proto: ConnectionCategory } },
    data: connectionCategories,
  },
  CONNECTIONS: {
    name: 'connections',
    collectionOptions: { unique: ['id'] },
    dbOptions: { connections: { proto: Connection } },
    data: connections,
  },
  CLASSES: {
    name: 'classes',
    collectionOptions: { unique: ['id'] },
    dbOptions: { classes: { proto: Class } },
    data: classes,
  },
  SUBCLASSES: {
    name: 'subclasses',
    collectionOptions: { unique: ['id'] },
    dbOptions: { subclasses: { proto: Subclass } },
    data: subclasses,
  },
  ATTRIBUTES: {
    name: 'attributes',
    collectionOptions: { unique: ['id'] },
    dbOptions: { attributes: { proto: Attribute } },
    data: attributes,
  },
  SUBATTRIBUTES: {
    name: 'subattributes',
    collectionOptions: { unique: ['id'] },
    dbOptions: { subattributes: { proto: Subattribute } },
    data: subattributes,
  },
  SKILLS: {
    name: 'skills',
    collectionOptions: { unique: ['id'] },
    dbOptions: { skills: { proto: Skill } },
    data: skills,
  },
  SUBSKILLS: {
    name: 'subskills',
    collectionOptions: { unique: ['id'] },
    dbOptions: { subskills: { proto: Subskill } },
    data: subskills,
  },
  BONUSES: {
    name: 'bonuses',
    collectionOptions: { unique: ['id'] },
    dbOptions: { bonuses: { proto: Bonus } },
    data: bonuses,
  },
  MODIFIERS: {
    name: 'modifiers',
    collectionOptions: { unique: ['id'] },
    dbOptions: { modifiers: { proto: Modifier } },
    data: modifiers,
  },
  MODIFIER_PROFILES: {
    name: 'modifierProfiles',
    collectionOptions: {},
    dbOptions: { modifierProfiles: { proto: ModifierProfile } },
    data: modifierProfiles,
  },
};
