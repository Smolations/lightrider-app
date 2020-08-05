import classNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import {
  Container,
  Divider,
  Dropdown,
  Grid,
  Header,
  Image,
  List,
  Menu,
  Segment,
} from 'semantic-ui-react';

import logo from './logo.svg';

import './Nav.scss';


/**
 *
 */
export default function Nav(props) {
  const {
    children,
    className,
  } = props;

  const classes = classNames('Nav', {
  }, className);


  return (
    <Menu fixed="top" inverted>
      <Container>
        <Menu.Item as="a" header>
          <Image size="mini" src={logo} style={{ marginRight: '1.5em' }} />
          Project Name
        </Menu.Item>
        <Menu.Item as="a">Home</Menu.Item>

        <Dropdown item simple text="Dropdown">
          <Dropdown.Menu>
            <Dropdown.Item>List Item</Dropdown.Item>
            <Dropdown.Item>List Item</Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Header>Header Item</Dropdown.Header>
            <Dropdown.Item>
              <i className="dropdown icon" />
              <span className="text">Submenu</span>
              <Dropdown.Menu>
                <Dropdown.Item>List Item</Dropdown.Item>
                <Dropdown.Item>List Item</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown.Item>
            <Dropdown.Item>List Item</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </Container>
    </Menu>
  );
}


Nav.displayName = 'Nav';

Nav.propTypes = {
  children: PropTypes.node,
};

Nav.defaultProps = {
};
