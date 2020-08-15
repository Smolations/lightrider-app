import { lokiCollections } from '../db';

const _collection = Symbol('collection');

/**
 *  Meant to be used as an object wrapper around a loki collection record.
 *
 *  @mixin
 *  @name module:lightrider/mixins~Collectionable
 *  @param {*} SuperClass=class{} The class to mix onto.
 *  @returns {Collectionable} The mixed class.
 *
 *  @see Collectionable
 */
const Collectionable = (SuperClass = class {}) =>

/**
 *  Meant to be used as an object wrapper around a loki collection record.
 *
 *  @class
 *  @alias Collectionable
 *
 *  @param {object} options
 *  @param {object} options.collectionKey The key of `lokiCollections` object which matches
 *                                        the desired collection to integrate.
 *
 *  @see module:lightrider/mixins~Collectionable
 *  @throws {TypeError} If `options.collectionKey` is not present.
 *  @throws {Error}     If `options.collectionKey` does not result in a loki collection reference.
 */
class extends SuperClass {
  constructor({ collectionKey, ...superOpts } = {}) {
    if (!collectionKey) {
      throw new TypeError(`Collectionable must be provided with valid collectionKey!`);
    }

    const collection = lokiCollections[collectionKey];

    if (!collection) {
      throw new Error(`Unable to find collection with key: ${collectionKey}`);
    }

    super({ ...superOpts });

    this[_collection] = collection;
  }

  collection() {
    return this[_collection];
  }

  save() {
    const action = this.$loki ? 'update' : 'insert';

    this[_collection][action](this);

    return this;
  }
};


export default Collectionable;
