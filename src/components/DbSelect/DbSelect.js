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
    disabledFilter,
    filter,
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

    const results = collection.find(searchCriteria).filter(filter);
    const mapDisabled = results.map((result, ndx) => !!disabledFilter(result, ndx));

    return results.map((result, ndx) => ({
      key: `.${result.id}`,
      text: result.name,
      value: result[valueKey],
      disabled: mapDisabled[ndx],
    }));
  }, [
    collectionName,
    disabledFilter,
    filter,
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
   *  If any dropdown options need to be disabled by arbitrary criteria,
   *  a function can be provided here. Any truthy value will disable the
   *  record in the list. Its signature is `(record, index)`.
   */
  disabledFilter: PropTypes.func,

  /**
   *  If the dropdown options need to be filtered by arbitrary criteria,
   *  a function can be provided here. Any falsy value will remove the
   *  record from the list. Its signature is `(record, index)`.
   */
  filter: PropTypes.func,

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
  disabledFilter: () => false,
  filter: () => true,
  valueKey: 'id',
};
