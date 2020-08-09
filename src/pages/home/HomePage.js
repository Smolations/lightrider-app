import classNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

import { Page } from '../../components/Page';


import './HomePage.scss';


/**
 *
 */
export default function HomePage(props) {
  const {
    children,
    className,
  } = props;

  const classes = classNames('HomePage', {
  }, className);


  return (
    <Page className={classes} name="Home">

    </Page>
  );
}


HomePage.displayName = 'HomePage';

HomePage.propTypes = {
  children: PropTypes.node,
};

HomePage.defaultProps = {
};