import { lokiCollections } from '../db';
import Collectionable from '../mixins/collectionable';


export default class Connection extends Collectionable() {
  constructor(options) {
    if (!options.id || !options.connectionCategoryId || !options.name) {
      throw new Error('id, connectionCategoryId, and name are required!');
    }

    super({ collectionKey: 'CONNECTIONS' });

    this.id = options.id;
    this.connectionCategoryId = options.connectionCategoryId;
    this.name = options.name;
    this.description = options.description || '';
  }
}
