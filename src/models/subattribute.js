import { lokiCollections } from '../db';
import Collectionable from '../mixins/collectionable';


export default class Subattribute extends Collectionable() {
  constructor(options) {
    if (!options.id || !options.attributeId || !options.name) {
      throw new Error('id, attributeId, and name are required!');
    }

    super({ collectionKey: 'SUBATTRIBUTES' });

    this.id = options.id;
    this.attributeId = options.attributeId;
    this.name = options.name;
    this.description = options.description || '';
  }
}
