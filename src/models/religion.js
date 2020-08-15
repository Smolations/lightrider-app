// import { lokiCollections } from '../db';
import Collectionable from '../mixins/collectionable';


export default class Religion extends Collectionable() {
  constructor(options) {
    if (!options.id || !options.name) {
      throw new Error('id and name are required!');
    }

    super({ collectionKey: 'RELIGIONS' });

    this.id = options.id;
    this.name = options.name;
    this.description = options.description || '';
  }
}
