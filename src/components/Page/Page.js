import classNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import { Container, Header } from 'semantic-ui-react';


import './Page.scss';


/**
 *
 */
export default function Page(props) {
  const {
    children,
    className,
    name,
    rightAside,
  } = props;

  const classes = classNames('Page', className);


  return (
    <Container className={classes}>
      {rightAside && (<Header as="h1" floated="right">{rightAside}</Header>)}
      <Header as="h1">{name}</Header>
      {children}
    </Container>
  );
}


Page.displayName = 'Page';

Page.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  name: PropTypes.string.isRequired,
};
