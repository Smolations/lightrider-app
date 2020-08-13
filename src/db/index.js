import loki from 'lokijs';

import data from './data';

// gather db options for all data
let dbOptions = {};

Object.values(data).forEach((spec) => {
  dbOptions = { ...dbOptions, ...spec.dbOptions };
});
console.log('[db/index.js] dbOptions: %o', dbOptions);

const lokiDb = new loki('lightrider.db', dbOptions);


// create POJOs identical to the data dictionary, but with
// database objects as values
const lokiCollections = {};

for (let [key, spec] of Object.entries(data)) {
  // console.log('[db/index.js] adding collection: %o %o', key, spec)

  // loki is a bit more verbose
  lokiCollections[key] = lokiDb.addCollection(spec.name, spec.collectionOptions);

  lokiCollections[key].insert(spec.data);
}


export { lokiDb, lokiCollections };
