// import { lokiCollections } from '../db';
import Collectionable from '../mixins/collectionable';


export default class AppSettings extends Collectionable() {
  constructor(options) {
    if (!options.id || !options.name) {
      throw new Error('id and name are required!');
    }

    super({ collectionKey: 'APP_SETTINGS' });

    this.id = options.id;
    this.name = options.name;
    this.characterCreation = options.characterCreation || {};
  }
}
