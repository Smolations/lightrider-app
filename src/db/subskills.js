import { taffy } from 'taffydb';

export default taffy([
  { id: 1, skillId: 1, name: 'Advantages', description: 'Advantages allows the character to seek ways in which to best use the environment in combat.' },
  { id: 2, skillId: 1, name: 'Mapping', description: 'Mapping allows the character to accurately predict the layout of the environment.' },
  { id: 3, skillId: 1, name: 'Traps', description: 'Traps allows the character to detect/disarm traps and detect ambushes in the immediate environment.' },

  { id: 4, skillId: 2, name: 'Boarding', description: 'Boarding allows the character to forcibly gain access to an enemy vessel, as well as counter enemy boarding parties.' },
  { id: 5, skillId: 2, name: 'Maneuvering', description: 'Maneuvering allows the character to safely navigate in space, as well as move effectively while external to the vessel.' },
  { id: 6, skillId: 2, name: 'Survival (Space)', description: 'Survival (Space) allows the character to stay alive for long periods of time in space.' },

  { id: 7, skillId: 3, name: 'Cover', description: 'Cover allows the character to effectively use objects in the terrain to block incoming attacks.' },
  { id: 8, skillId: 3, name: 'Movement', description: 'Movement allows the character to move more quickly and freely across a terrestrial battlefield. Characters with Skill-Points in Movement are more able to vault obstacles and move through barriers on the battlefield.' },
  { id: 9, skillId: 3, name: 'Survival (Terrestrial)', description: 'Survival (Terrestrial) allows the character to stay alive for long periods of time in the wilderness.' },

  { id: 10, skillId: 4, name: 'Concentration', description: 'Concentration allows the character to direct mental energy toward a particular cause.' },
  { id: 11, skillId: 4, name: 'Mental Defences', description: 'Mental Defense allows the character to resist psychic and mental attacks.' },
  { id: 12, skillId: 4, name: 'Sanity', description: 'Sanity allows the character to remain of sound mind when affected by mental Conditions (for use with Spellbooks, see Weapon Types).' },

  { id: 13, skillId: 5, name: 'Attunement', description: 'Attunement allows the character to sense supernatural forces.' },
  { id: 14, skillId: 5, name: 'Overflow', description: 'Overflow allows a character to use supernatural forces to supplement their Spells.' },
  { id: 15, skillId: 5, name: 'Resistance', description: 'Resistance allows a character to resist the effects of Spells.|Whenever a manifested Spell affects the character, he may attempt to resist the effect of the Spell - the character makes a Resistance check. On an 11+, the check is passed, and the effect of the Spell on that character is nullified.' },

  { id: 16, skillId: 6, name: 'Medicine', description: 'Medicine allows the character to temporarily raise the Health of a character in the heat of battle.|Medicine can only be used during combat (or at an appropriate story moment), and only when the character is adjacent to the target of the medicine roll. The result of the Medicine roll is measured against the damage chart (see Resolving Combat), and the resulting number indicates the amount of Health gained (up to max). This Health will then drop once combat is over.' },
  { id: 17, skillId: 6, name: 'Stabilization', description: 'Stabilisation allows the character to halt the process of Bleedout.' },
  { id: 18, skillId: 6, name: 'Surgery', description: 'Surgery allows the character to more permanently return Health to a character outside of battle.|Surgery can only be used outside of combat (or at an appropriate story moment. The result of the Surgery roll is measured against the damage chart (see Resolving Combat), and the resulting number indicates the amount of Health gained (up to max).' },

  { id: 19, skillId: 7, name: 'Actions', description: 'Actions allows the character to detect the movements of surrounding elements.' },
  { id: 20, skillId: 7, name: 'Objects', description: 'Objects allows the character to detect static elements of the surrounding world.' },
  { id: 21, skillId: 7, name: 'Truth', description: 'Truth allows the character to detect fabrication presented by NPCs.' },

  { id: 22, skillId: 8, name: 'Lockpicking', description: 'Lockpicking allows the character to bypass locks, both mechanical and electric.' },
  { id: 23, skillId: 8, name: 'Stealth', description: 'Stealth allows the character to evade detection.' },
  { id: 24, skillId: 8, name: 'Theft', description: 'Theft allows a character to take possession of items.' },
]);
