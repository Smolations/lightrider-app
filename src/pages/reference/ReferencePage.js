import classNames from 'classnames';
import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { Dropdown } from 'semantic-ui-react';

import dbs from '../../db';

import { Page } from '../../components/Page';
import { ReferenceCategory } from '../../components/Reference';

import './ReferencePage.scss';


/**
 *
 */
export default function ReferencePage(props) {
  const {
    className,
  } = props;

  const classes = classNames('ReferencePage', className);

  const categories = [
    {
      key: 'factions',
      text: 'Factions',
      value: ['RACES', 'FACTIONS', 'raceId'],
    },
    {
      key: 'religions',
      text: 'Religions',
      value: ['RELIGIONS', null, null],
    },
    {
      key: 'languages',
      text: 'Languages',
      value: ['LANGUAGE_CATEGORIES', 'LANGUAGES', 'languageCategoryId'],
    },
    {
      key: 'knowledge',
      text: 'Knowledge',
      value: ['KNOWLEDGE_CATEGORIES', 'KNOWLEDGE', 'knowledgeCategoryId'],
    },
    {
      key: 'connections',
      text: 'Connections',
      value: ['CONNECTION_CATEGORIES', 'CONNECTIONS', 'connectionCategoryId'],
    },
    {
      key: 'classes',
      text: 'Classes',
      value: ['CLASSES', 'SUBCLASSES', 'classId'],
    },
    {
      key: 'attributes',
      text: 'Attributes',
      value: ['ATTRIBUTES', 'SUBATTRIBUTES', 'attributeId'],
    },
    {
      key: 'skills',
      text: 'Skills',
      value: ['SKILLS', 'SUBSKILLS', 'skillId'],
    },
  ];

  const [categoryDbs, setCategoryDbs] = useState({
    categoryDb: null,
    subcategoryDb: null,
    joinKey: null,
  });

  const { categoryDb, subcategoryDb, joinKey } = categoryDbs;


  function handleDropdownChange(evt, { value }) {
    const [categoryKey, subcategoryKey, joinKey] = value;

    setCategoryDbs({
      categoryDb: dbs[categoryKey],
      subcategoryDb: dbs[subcategoryKey] ? dbs[subcategoryKey] : null,
      joinKey,
    });
  }


  return (
    <Page className={classes} name="Reference">
      <Dropdown
        placeholder="Select Topic"
        options={categories}
        onChange={handleDropdownChange}
        selection
      />

      <ReferenceCategory
        categoryDb={categoryDb}
        subcategoryDb={subcategoryDb}
        joinKey={joinKey}
      />
    </Page>
  );
}


ReferencePage.displayName = 'ReferencePage';

ReferencePage.propTypes = {
  className: PropTypes.string,
};

ReferencePage.defaultProps = {
};
