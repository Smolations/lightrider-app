// import { lokiCollections } from '../db';
import Collectionable from '../mixins/collectionable';


export default class Subclass extends Collectionable() {
  constructor(options) {
    if (!options.id || !options.classId || !options.name) {
      throw new Error('id, classId, and name are required!');
    }

    super({ collectionKey: 'SUBCLASSES' });

    this.id = options.id;
    this.classId = options.classId;
    this.name = options.name;
    this.description = options.description || '';
  }
}
