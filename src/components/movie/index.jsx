import React from 'react';
import PropTypes from 'prop-types';
import { ElementIndex } from '..';
import classes from './styles.module.less';

export const Movie = ({ elementIndex, title, premiereDate, director }) => (
  <div className={classes.movie}>
    {elementIndex === undefined ? null : <ElementIndex index={elementIndex} />}
    <span className={classes.title}>{title}</span>
    <span className={classes.premiere}>({premiereDate})</span>-{' '}
    <span>{director}</span>
  </div>
);

Movie.propTypes = {
  elementIndex: PropTypes.number,
  title: PropTypes.string.isRequired,
  premiereDate: PropTypes.number.isRequired,
  director: PropTypes.string.isRequired
};
