import { lokiCollections } from '../db';


/**
 *  Meant to be used when a model wraps a JSON object/POJO. Allows for adding
 *  convenience/helper methods to the object without modifying the object itself.
 *
 *  @mixin
 *  @name module:lightrider/mixins~Modifyable
 *  @param {*} SuperClass=class{} The class to mix onto.
 *  @returns {Modifyable} The mixed class.
 *
 *  @requires lightrider/mixins~Proxyable
 *  @see Modifyable
 */
const Modifyable = (SuperClass = class {}) =>

/**
 *  Meant to be used when a model wraps a JSON object/POJO. Allows for adding
 *  convenience/helper methods to the object without modifying the object itself.
 *
 *  @class
 *  @alias Modifyable
 *  @extends Proxyable
 *
 *  @param {object} options
 *  @param {object} options.json={} The JSON object to wrap.
 *
 *  @see module:lightrider/mixins~Modifyable
 *  @throws {TypeError} If `options.json` is not a valid object.
 */
class extends SuperClass {
  get modifierCollection() {
    return db.MODIFIERS;
  }

  get modifierValuesCollection() {
    return db.MODIFIER_VALUES;
  }

  get modifierProfilesCollection() {
    return db.MODIFIER_PROFILES;
  }


  constructor({ record = {}, ...superOpts } = {}) {
    const obj = isString(record) ? JSON.parse(record) : record;

    if (!isObject(obj)) {
      // console.error(`Modifyable must be provided with valid JSON string or POJO!`);
      throw new TypeError(`Modifyable must be provided with valid JSON string or POJO!`);
    }

    super({ ...superOpts });
  }
};


export default Modifyable;
