import React from 'react';
import classes from './styles.module.less';

export const ElementIndex = ({ index }) => {
  const classNames = [
    classes.elementIndex,
    index >= 9 ? classes.greater : ''
  ].join(' ');

  return <span className={classNames}>{index + 1}</span>;
};
