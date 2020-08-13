import classNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import { NavLink, useRouteMatch } from 'react-router-dom';
import {
  Container,
  Image,
  Menu,
} from 'semantic-ui-react';

import logo from './logo.svg';

import './Nav.scss';


/**
 *
 */
export default function Nav(props) {
  const {
    className,
  } = props;

  const classes = classNames('Nav', className);

  const homeMatch = useRouteMatch({ path: '/', exact: true });
  const charactersMatch = useRouteMatch({ path: '/characters' });
  const referenceMatch = useRouteMatch({ path: '/reference' });


  return (
    <Menu className={classes} fixed="top" inverted>
      <Container>
        <Menu.Item header>
          <Image size="mini" src={logo} style={{ marginRight: '1.5em' }} />
          Lightrider App
        </Menu.Item>

        <Menu.Item active={!!homeMatch}>
          <NavLink to="/">Home</NavLink>
        </Menu.Item>
        <Menu.Item active={!!charactersMatch}>
          <NavLink to="/characters">Characters</NavLink>
        </Menu.Item>
        <Menu.Item active={!!referenceMatch}>
          <NavLink to="/reference">Reference</NavLink>
        </Menu.Item>
      </Container>
    </Menu>
  );
}


Nav.displayName = 'Nav';

Nav.propTypes = {
  className: PropTypes.string,
};
