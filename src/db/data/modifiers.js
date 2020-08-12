export const collectionOptions = { unique: ['id'] };

// currencies are groups of modifiers?
//   - i.e. the number of modifiers to be expended?
// modifiers should be incrementable by 1
export default [
  { id: 1, shortName: 'str', longName: 'strength' },
  { id: 2, shortName: 'dex', longName: 'dexterity' },
  { id: 3, shortName: 'int', longName: 'intelligence' },
  { id: 4, shortName: 'mch', longName: 'machining' },
  { id: 5, shortName: 'ldr', longName: 'leadership' },
  { id: 6, shortName: 'tgh', longName: 'toughness' },

  { id: 7, shortName: 'dmg', longName: 'damage' },
];
