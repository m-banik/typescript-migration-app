import React from 'react';
import classes from './styles.module.less';

export const ElementIndex = ({ index }) => {
  const indexElementClasses = [
    classes.index,
    index >= 9 ? classes.greater : ''
  ].join(' ');

  return <span className={indexElementClasses}>{index + 1}</span>;
};
