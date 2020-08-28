export default [
  // for costs, if modified by racial traits or class, records
  // can be updated when those things are chosen during creation

  // character modifications
  { id: 1, name: 'Attributes', description: '', cost: 7 },
  { id: 2, name: 'Skills', description: '', cost: 5 },
  { id: 3, name: 'Connections', description: '', cost: 0 },
  { id: 4, name: 'Knowledge', description: '', cost: 2 },
  { id: 5, name: 'Language', description: '', cost: 4 },
  { id: 6, name: 'Combos', description: '', cost: 3, subsequentCost: 2 },
  { id: 7, name: 'Engine Mastery', description: '', cost: 6 },
  { id: 8, name: 'Classes', description: '', cost: 12 },

  // estimated groups
  { id: 9, name: 'Combat (Character)', description: '', cost: 0 },
  { id: 9, name: 'Combat (Objects/Allies)', description: '', cost: 0 },
];
