import React from 'react';
import PropTypes from 'prop-types';
import CN from 'classnames';
import classes from './styles.module.less';

export const ElementIndex = ({ index }) => {
  const classNames = CN(classes.elementIndex, {
    [classes.greater]: index >= 9
  });

  return <span className={classNames}>{index + 1}</span>;
};

ElementIndex.propTypes = {
  index: PropTypes.number.isRequired
};
