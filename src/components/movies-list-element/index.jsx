import React from 'react';
import { useSelector } from 'react-redux';
import { selectMovieById } from '../../models';
import classes from './styles.module.less';

export const MoviesListElement = ({ movieId, elementIndex }) => {
  const movie = useSelector((store) => selectMovieById(movieId)(store));

  return (
    <li className={classes.moviesListElement}>
      <p className={classes.content}>
        {elementIndex === undefined ? null : (
          <span className={classes.index}>{elementIndex + 1}</span>
        )}
        <span className={classes.title}>{movie.title}</span>
        <span className={classes.premiere}>({movie.premiere_date})</span>-{' '}
        <span>{movie.director}</span>
      </p>
    </li>
  );
};
