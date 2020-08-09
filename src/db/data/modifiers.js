// currencies are groups of modifiers?
//   - i.e. the number of modifiers to be expended?
// modifiers should be incrementable by 1
export default [
  { id: 1, abbr: 'str' name: 'strength', description: 'Strength is a character’s ability to perform physically demanding tasks. Strength - 1 = the maximum Rank of Mélée Weapon or loadout that a character can wield.' },
  { id: 2, abbr: 'dex' name: 'dexterity', description: 'Dexterity is a character’s ability to move quickly, precisely, and accurately. Dexterity - 1 = the maximum Rank of Ranged Weapon or loadout that a character can wield.' },
  { id: 3, abbr: 'int' name: 'intelligence', description: 'Intelligence is the effectiveness of a character’s mental faculties. Intelligence - 4 = the maximum Rank of Spellbook useable by a character.' },
  { id: 4, abbr: 'mch' name: 'machining', description: 'Machining is a character’s ability to work with technology in the world.' },
  { id: 5, abbr: 'ldr' name: 'leadership', description: 'Leadership is a character’s ability to influence other beings in the world.' },
  { id: 6, abbr: 'tgh' name: 'toughness', description: 'Toughness is a character’s ability to withstand dangers in the world. Toughness = the character’s total Health stat.' },

  { id: 7, abbr: 'dmg' name: 'damage', description: 'The amount of damage to inflict.' },
];
