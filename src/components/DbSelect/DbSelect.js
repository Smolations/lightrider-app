import classNames from 'classnames';
import snakeCase from 'lodash/snakeCase';
import PropTypes from 'prop-types';
import React, { useMemo } from 'react';
import { Select } from 'semantic-ui-react';

import { lokiCollections } from '../../db';


/**
 *  There will be many times when database results need to be formatted
 *  for dropdowns. This helps ease that process by encapsulating most of the
 *  work in a single component. It even lets you cross reference with a
 *  "join!" For example, if you wanted to get all subclasses with an
 *  associated `classId` of 2, you'd pass:
 *
 *    collectionName="subclasses"
 *    joinKey="classId"
 *    joinValue={2}
 */
export default function DbSelect(props) {
  const {
    className,
    collectionName,
    joinKey,
    joinValue,
    valueKey,
    ...selectProps
  } = props;

  const classes = classNames('DbSelect', className);

  // memoize so db doesn't get queried each render
  const opts = useMemo(() => {
    const collectionKey = snakeCase(collectionName).toUpperCase();
    const collection = lokiCollections[collectionKey];
    let searchCriteria = undefined;

    if (!collectionKey) {
      return [];
    }

    if (!collection) {
      throw new Error(`Unable to find collection with key: ${collectionKey}`);
    }

    if (joinKey && joinValue) {
      searchCriteria = { [joinKey]: joinValue };
    }

    return collection.find(searchCriteria).map(result => ({
      key: `.${result.id}`,
      text: result.name,
      value: result[valueKey],
    }));
  }, [
    collectionName,
    joinKey,
    joinValue,
    valueKey,
  ]);


  return (
    <Select{...selectProps} className={classes} options={opts} />
  );
}


DbSelect.displayName = 'DbSelect';

DbSelect.propTypes = {
  className: PropTypes.string,

  /**
   *  Name of the collection. Will be converted to SCREAMING_SNAKE_CASE
   *  and matched with a key on the database dictionary.
   */
  collectionName: PropTypes.string.isRequired,

  /**
   *  To search the collection while matching on a key, provide the key
   *  name here (e.g. 'classId'), and the raw value in `joinValue` (e.g. `2`).
   */
  joinKey: PropTypes.string,

  /**
   *  To search the collection while matching on a key, provide the key
   *  name in `joinKey` (e.g. 'classId'), and the raw value here (e.g. `2`).
   */
  joinValue: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.bool,
  ]),

  /**
   *  When receiving a value in the `onChange` handler, you can specify
   *  a different record key here (default is 'id').
   */
  valueKey: PropTypes.string,
};

DbSelect.defaultProps = {
  valueKey: 'id',
};
