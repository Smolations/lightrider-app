import { lokiCollections } from '../db';
import Collectionable from '../mixins/collectionable';


export default class Modifier extends Collectionable() {
  constructor(options) {
    if (!options.id || !options.shortName || !options.longName) {
      throw new Error('id, shortName, and longName are required!');
    }

    super({ collectionKey: 'MODIFIERS' });

    this.id = options.id;
    this.shortName = options.shortName;
    this.longName = options.longName;
  }
}
