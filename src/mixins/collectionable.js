import { lokiCollections } from '../db';

const _collection = Symbol('collection');

/**
 *  Meant to be used when a model wraps a JSON object/POJO. Allows for adding
 *  convenience/helper methods to the object without modifying the object itself.
 *
 *  @mixin
 *  @name module:lightrider/mixins~Collectionable
 *  @param {*} SuperClass=class{} The class to mix onto.
 *  @returns {Collectionable} The mixed class.
 *
 *  @requires lightrider/mixins~Proxyable
 *  @see Collectionable
 */
const Collectionable = (SuperClass = class {}) =>

/**
 *  Meant to be used when a model wraps a JSON object/POJO. Allows for adding
 *  convenience/helper methods to the object without modifying the object itself.
 *
 *  @class
 *  @alias Collectionable
 *  @extends Proxyable
 *
 *  @param {object} options
 *  @param {object} options.json={} The JSON object to wrap.
 *
 *  @see module:lightrider/mixins~Collectionable
 *  @throws {TypeError} If `options.json` is not a valid object.
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
