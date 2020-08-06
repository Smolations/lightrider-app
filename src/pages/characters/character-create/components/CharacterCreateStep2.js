import classNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import { Container } from 'semantic-ui-react';

// import './CharacterCreateStep2.scss';


/**
 *
 */
export default function CharacterCreateStep2(props) {
  const {
    children,
    className,
  } = props;

  const classes = classNames('CharacterCreateStep2', className);


  return (
    <Container className={classes}>
      {children}
    </Container>
  );
}


CharacterCreateStep2.displayName = 'CharacterCreateStep2';

CharacterCreateStep2.propTypes = {
  children: PropTypes.node,
};

CharacterCreateStep2.defaultProps = {
};
