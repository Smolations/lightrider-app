import classNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

import dbs from '../../db';

import './Reference.scss';


/**
 *
 */
export default function Reference(props) {
  const {
    children,
    className,
  } = props;

  const classes = classNames('Reference', {
  }, className);

  console.log(dbs.RACES({ id: 1 }).first())

  return (
    <div className={classes}>
      Reference {dbs.RACES({ id: 1 }).first().name}
    </div>
  );
}


Reference.displayName = 'Reference';

Reference.propTypes = {
  children: PropTypes.node,
};

Reference.defaultProps = {
};
