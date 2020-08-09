import camelCase from 'lodash/camelCase';
import loki from 'lokijs';
import { taffy } from 'taffydb';

import data from './data';


// loki db testing
const lokiDb = new loki('lightrider.db');


// create POJOs identical to the data dictionary, but with
// database objects as values
const taffyCollections = {};
const lokiCollections = {};

for (let [key, dataArray] of Object.entries(data)) {
  // console.log('%o: %o', key, dataArray)
  // taffy is super simple
  taffyCollections[key] = taffy(dataArray);

  // loki is a bit more verbose
  lokiCollections[key] = lokiDb.addCollection(camelCase(key), { unique: ['id'] });

  dataArray.forEach(record => lokiCollections[key].insert(record));
}


export { lokiDb, lokiCollections };

// taffy db by default
export default taffyCollections;
