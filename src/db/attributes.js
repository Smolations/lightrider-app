import { taffy } from 'taffydb';

export default taffy([
  { id: 1, name: 'Strength', description: 'Strength is a character’s ability to perform physically demanding tasks. Strength - 1 = the maximum Rank of Mélée Weapon or loadout that a character can wield.' },
  { id: 2, name: 'Dexterity', description: 'Dexterity is a character’s ability to move quickly, precisely, and accurately. Dexterity - 1 = the maximum Rank of Ranged Weapon or loadout that a character can wield.' },
  { id: 3, name: 'Intelligence', description: 'Intelligence is the effectiveness of a character’s mental faculties. Intelligence - 4 = the maximum Rank of Spellbook useable by a character.' },
  { id: 4, name: 'Machining', description: 'Machining is a character’s ability to work with technology in the world.' },
  { id: 5, name: 'Leadership', description: 'Leadership is a character’s ability to influence other beings in the world.' },
  { id: 6, name: 'Toughness', description: 'Toughness is a character’s ability to withstand dangers in the world. Toughness = the character’s total Health stat.' },
]);
