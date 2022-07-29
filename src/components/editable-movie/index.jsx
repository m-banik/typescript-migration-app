import React from 'react';
import classes from './styles.module.less';

export const EditableMovie = ({
  elementIndex,
  title,
  premiereDate,
  director
}) => {
  return (
    <div className={classes.editableMovie}>
      {elementIndex === undefined ? null : (
        <span className={classes.index}>{elementIndex + 1}</span>
      )}
      <span className={classes.title}>{title}</span>
      <span className={classes.premiere}>({premiereDate})</span>-{' '}
      <span>{director}</span>
    </div>
  );
};