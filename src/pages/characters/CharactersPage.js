import classNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import { NavLink } from 'react-router-dom';
import {
  Button,
} from 'semantic-ui-react';

import { Page } from '../../components/Page';

import './CharactersPage.scss';


/**
 *
 */
export default function CharactersPage(props) {
  const {
    className,
  } = props;

  const classes = classNames('CharactersPage', className);


  return (
    <Page className={classes} name="Characters">
      <Button>
        <NavLink to="/characters/create">Create Character</NavLink>
      </Button>
    </Page>
  );
}


CharactersPage.displayName = 'CharactersPage';

CharactersPage.propTypes = {
  className: PropTypes.string,
};

CharactersPage.defaultProps = {
};
