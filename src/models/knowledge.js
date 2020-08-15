// import { lokiCollections } from '../db';
import Collectionable from '../mixins/collectionable';


export default class Knowledge extends Collectionable() {
  constructor(options) {
    if (!options.id || !options.knowledgeCategoryId || !options.name) {
      throw new Error('id, knowledgeCategoryId, and name are required!');
    }

    super({ collectionKey: 'KNOWLEDGE' });

    this.id = options.id;
    this.knowledgeCategoryId = options.knowledgeCategoryId;
    this.name = options.name;
    this.description = options.description || '';
  }
}
