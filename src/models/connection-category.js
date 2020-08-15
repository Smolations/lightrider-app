import { lokiCollections } from '../db';
import Collectionable from '../mixins/collectionable';


export default class ConnectionCategory extends Collectionable() {
  constructor(options) {
    if (!options.id || !options.name) {
      throw new Error('id and name are required!');
    }

    super({ collectionKey: 'CONNECTION_CATEGORIES' });

    this.id = options.id;
    this.name = options.name;
    this.description = options.description || '';
  }
}
