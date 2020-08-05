import classNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';


import './Home.scss';


/**
 *
 */
export default function Home(props) {
  const {
    children,
    className,
  } = props;

  const classes = classNames('Home', {
  }, className);


  return (
    <div className={classes}>
      {children}
    </div>
  );
}


Home.displayName = 'Home';

Home.propTypes = {
  children: PropTypes.node,
};

Home.defaultProps = {
};
