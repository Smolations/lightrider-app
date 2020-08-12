export const collectionOptions = { unique: ['id'] };

export default [
  // Strength
  {
    id: 1,
    attributeId: 1,
    name: 'Fury',
    description: 'Fury is how much power a character can put behind each attack, Mélée or Ranged. For each Point in Fury, the threshold needed to achieve an extreme roll (critical success) on all DMG rolls is decreased by 1. (no negative)',
  },
  {
    id: 2,
    attributeId: 1,
    name: 'Muscles',
    description: 'Muscles is a character’s ability to generate force against the physical world. For each Point in Muscles, the player will receive an extra column of Inventory space AND can carry 1 extra Weapon. (each negative Point will reduce the character’s Inventory space by 1 row and reduce the number of Weapons the character can carry by 1)',
  },
  {
    id: 3,
    attributeId: 1,
    name: 'Weapons',
    description: 'Weapons is a character’s skill in wielding Mélée Weapons. For each Point in Weapons, the player will receive +1A when making ACC rolls with Mélée Weapons. (each negative Point will yield -1A)',
  },
  // Dexterity
  {
    id: 4,
    attributeId: 2,
    name: 'Firearms',
    description: 'Firearms is a character’s skill in wielding Ranged Weapons. For each Point in Firearms, the player will receive +1A when making ACC rolls with Ranged Weapons. (each negative Point will yield -1A)',
  },
  {
    id: 5,
    attributeId: 2,
    name: 'Reflexes',
    description: 'Reflexes is a character’s ability to respond quickly in various scenarios. For each Point in Reflexes, the player will receive +1A when making EVA rolls. (each negative Point will yield -1A)',
  },
  {
    id: 6,
    attributeId: 2,
    name: 'Speed',
    description: 'Speed is a character’s ability to move through the world with haste. For each Point in Speed, the player may move an extra two squares/units in each action dedicated to Movement. (each negative Point will reduce this by 1 tile)',
  },
  // Intelligence
  {
    id: 7,
    attributeId: 3,
    name: 'Aptitude',
    description: 'Aptitude is a measure of how well a character engages in their primary profession. For each Point in Aptitude, the character’s Racial Trait is applied to the character once again. (no negative)',
  },
  {
    id: 8,
    attributeId: 3,
    name: 'Cleverness',
    description: 'Cleverness is a character’s ability to create and implement creative solutions, as well as cast difficult Spells. For each Point in Cleverness, the player will receive +1A to Casting rolls. (each negative Point will yield -1A)',
  },
  {
    id: 9,
    attributeId: 3,
    name: 'Knowledge',
    description: 'Knowledge is a character’s level of understanding of the world. For each Point in Knowledge, the player may fill in four extra boxes on the Knowledge Table. For Each Point in Knowledge, a Seeker’s Spell-Pool is expanded by 1; a Sorcerer’s Spell-Pool is expanded by 4. (each negative Point will reduce the Spell-Pool by 1, and -1 Knowledge Box)',
  },
  // Machining
  {
    id: 10,
    attributeId: 4,
    name: 'Interfacing',
    description: 'Interfacing is a character’s ability to interact with existing machinery. For each Point in Interfacing, the player will receive +2A to interfacing and hacking rolls. (each negative Point will yield -1A)',
  },
  {
    id: 11,
    attributeId: 4,
    name: 'Piloting',
    description: 'Piloting is a character’s ability to operate machinery effectively. For each Point in Piloting, will receive +2A to Piloting rolls, and +1A to ACC rolls while operating Armoured Shell. (each negative Point will yield -1A both of these rolls)',
  },
  {
    id: 12,
    attributeId: 4,
    name: 'Repairs',
    description: 'Repairs is a character’s ability to mend objects. For each Point in Repairs, the character will receive +2A to Repairs rolls. (each negative Point will yield -1A)',
  },
  // Leadership
  {
    id: 13,
    attributeId: 5,
    name: 'Authority',
    description: 'Authority is a character’s ability to inspire others, and to make Allies follow commands. For each Point in Authority, the player will be able to effectively issue commands to an order of magnitude of other characters (10n), and will also be able to have an extra active summoned Companion.',
  },
  {
    id: 14,
    attributeId: 5,
    name: 'Fearlessness',
    description: 'Fearlessness is a character’s willingness to jump into combat when the need arises. For each Point in Fearlessness, the player will receive +1A to Initiative rolls made at the beginning of combat. (each negative Point will yield -1A)',
  },
  {
    id: 15,
    attributeId: 5,
    name: 'Persuasion',
    description: 'Persuasion is a character’s ability to convince others. For each Point in Persuasion, the player will receive +2A to Persuasion rolls. Additionally, the player receives 5 Connection-Points and may fill in one extra box on the Connections Table. (each negative Point will yield -1A to Persuasion rolls, and reduce the total number of Connection-Points by 2)',
  },
  // Toughness
  {
    id: 16,
    attributeId: 6,
    name: 'Endurance',
    description: 'Endurance is how far a character’s body can be pushed before it fails. For each Point in Endurance, the player will receive +1A when making Armour Throws. (each negative Point will yield -1A)',
  },
  {
    id: 17,
    attributeId: 6,
    name: 'Heart',
    description: 'Heart is a character’s determination and resolve, allowing the character to push through mortal scenarios. For each Point in Heart, the player may gain 2 more Bleedout Counters before he is slain. (each negative Point will reduce the number of Bleedout Counters before mortality by 1)',
  },
  {
    id: 18,
    attributeId: 6,
    name: 'Vitality',
    description: 'Vitality is a character’s raw life-energy. For each Point in Vitality, increase the character’s maximum Health by 1. (no negative)',
  },
];
