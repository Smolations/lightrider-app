import classNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import { NavLink } from 'react-router-dom';
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


  return (
    <Menu className={classes} fixed="top" inverted>
      <Container>
        <Menu.Item as="a" header>
          <Image size="mini" src={logo} style={{ marginRight: '1.5em' }} />
          Lightrider App
        </Menu.Item>

        <Menu.Item>
          <NavLink to="/">Home</NavLink>
        </Menu.Item>
        <Menu.Item>
          <NavLink to="/characters">Characters</NavLink>
        </Menu.Item>
        <Menu.Item>
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

Nav.defaultProps = {
};
