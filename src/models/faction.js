// import { lokiCollections } from '../db';
import Collectionable from '../mixins/collectionable';


export default class Faction extends Collectionable() {
  constructor(options) {
    if (!options.id || !options.raceId || !options.name) {
      throw new Error('id, raceId, and name are required!');
    }

    super({ collectionKey: 'FACTIONS' });

    this.id = options.id;
    this.raceId = options.raceId;
    this.name = options.name;
    this.description = options.description || '';
  }
}
