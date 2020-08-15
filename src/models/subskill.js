import { lokiCollections } from '../db';
import Collectionable from '../mixins/collectionable';


export default class Subskill extends Collectionable() {
  constructor(options) {
    if (!options.id || !options.skillId || !options.name) {
      throw new Error('id, skillId, and name are required!');
    }

    super({ collectionKey: 'SUBSKILLS' });

    this.id = options.id;
    this.skillId = options.skillId;
    this.name = options.name;
    this.description = options.description || '';
  }
}
