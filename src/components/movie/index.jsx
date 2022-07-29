import React from 'react';
import { ElementIndex } from '..';
import classes from './styles.module.less';

export const Movie = ({ elementIndex, title, premiereDate, director }) => {
  return (
    <div className={classes.movie}>
      {elementIndex === undefined ? null : (
        <ElementIndex index={elementIndex} />
      )}
      <span className={classes.title}>{title}</span>
      <span className={classes.premiere}>({premiereDate})</span>-{' '}
      <span>{director}</span>
    </div>
  );
};
