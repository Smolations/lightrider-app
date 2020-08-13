import classNames from 'classnames';
import startCase from 'lodash/startCase';
import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { Dropdown } from 'semantic-ui-react';

import { lokiCollections } from '../../db';

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

  const categoryMap = {
    factions: ['RACES', 'FACTIONS', 'raceId'],
    religions: ['RELIGIONS', null, null],
    languages: ['LANGUAGE_CATEGORIES', 'LANGUAGES', 'languageCategoryId'],
    knowledge: ['KNOWLEDGE_CATEGORIES', 'KNOWLEDGE', 'knowledgeCategoryId'],
    connections: ['CONNECTION_CATEGORIES', 'CONNECTIONS', 'connectionCategoryId'],
    classes: ['CLASSES', 'SUBCLASSES', 'classId'],
    attributes: ['ATTRIBUTES', 'SUBATTRIBUTES', 'attributeId'],
    skills: ['SKILLS', 'SUBSKILLS', 'skillId'],
  };

  const categoryOpts = Object.keys(categoryMap).map(category => ({
    key: category,
    text: startCase(category),
    value: category,
  }));

  const [categoryDbs, setCategoryDbs] = useState({
    categoryDb: null,
    subcategoryDb: null,
    joinKey: null,
  });

  const { categoryDb, subcategoryDb, joinKey } = categoryDbs;


  function handleDropdownChange(evt, { value }) {
    const [categoryKey, subcategoryKey, joinKey] = categoryMap[value];

    setCategoryDbs({
      categoryDb: lokiCollections[categoryKey],
      subcategoryDb: lokiCollections[subcategoryKey] ? lokiCollections[subcategoryKey] : null,
      joinKey,
    });
  }


  return (
    <Page className={classes} name="Reference">
      <Dropdown
        placeholder="Select Topic"
        options={categoryOpts}
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
