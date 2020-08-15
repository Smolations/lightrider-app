import classNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

import { Page } from '../../components/Page';

import { lokiCollections } from '../../db';
import Character from '../../models/character';
import ModifierProfile from '../../models/modifier-profile';


import './HomePage.scss';


/**
 *
 */
export default function HomePage(props) {
  const {
    className,
  } = props;

  const classes = classNames('HomePage', className);

  const profile = new ModifierProfile({ name: 'starting attributes' });
  profile
    .addValue(1, 1)
    .addValue(1, 1)
    .addValue(3, 3)
    .save()
    .addValue(5, 4)
    .save()

  const character = new Character({
    name: 'smola',
    raceId: 1,
    languages: { 1: { languageCategoryId: 1, languageId: 2 } },
  });


  // character.save();

  // const savedChar = lokiCollections.CHARACTERS.findOne({ $loki: character.$loki });

  console.groupCollapsed('[HomePage]');
  console.log('profile: %o', profile)
  console.log('values: %o', profile.values)
  console.log('inflated character: %o', character.getInflated())

  // for (let prop in character) {
  //   console.log('enumerable: %o', prop)
  // }
  // console.log('saved character: %o', savedChar)
  console.groupEnd();


  return (
    <Page className={classes} name="Home">

    </Page>
  );
}


HomePage.displayName = 'HomePage';

HomePage.propTypes = {
  className: PropTypes.string,
};

HomePage.defaultProps = {
};
