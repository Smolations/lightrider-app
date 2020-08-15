import { lokiCollections } from '../db';
import Collectionable from '../mixins/collectionable';


export default class Language extends Collectionable() {
  constructor(options) {
    if (!options.id || options.languageCategoryId || !options.name) {
      throw new Error('id, languageCategoryId, and name are required!');
    }

    super({ collectionKey: 'LANGUAGES' });

    this.id = options.id;
    this.languageCategoryId = options.languageCategoryId;
    this.name = options.name;
    this.description = options.description || '';
  }
}
