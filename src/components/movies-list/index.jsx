import React from 'react';
import { useSelector } from 'react-redux';
import { MoviesListControlPanel, MoviesListElement } from '..';
import { selectMoviesIds } from '../../models';
import classes from './styles.module.less';

export const MoviesList = () => {
  const moviesIds = useSelector((store) => selectMoviesIds(store));

  return (
    <div className={classes.moviesList}>
      <h1 className={classes.header}>My favourites of the Tenth Muse</h1>
      <MoviesListControlPanel />
      <ul className={classes.list}>
        {moviesIds.map((movieId, index) => (
          <MoviesListElement
            key={movieId}
            movieId={movieId}
            elementIndex={index}
          />
        ))}
      </ul>
    </div>
  );
};
