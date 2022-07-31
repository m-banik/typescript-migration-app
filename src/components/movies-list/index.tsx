import React from 'react';
import { useSelector } from 'react-redux';
import { selectMoviesIds } from '@MoviesModel/index';
import { StoreType } from '@Common/index';
import { MoviesListControlPanel, MoviesListElement } from '@Components/index';
import classes from './styles.module.less';

export const MoviesList: React.FC = () => {
  const moviesIds = useSelector((store: StoreType) => selectMoviesIds(store));

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
