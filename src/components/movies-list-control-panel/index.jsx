import React from 'react';
import { useDispatch } from 'react-redux';
import { EditableMovie, MoviesListControlButtonsPanel } from '..';
import {
  addMovieStart,
  clearMoviesModelState,
  resetMoviesModelState
} from '../../models';
import classes from './styles.module.less';

export const MoviesListControlPanel = () => {
  const dispatch = useDispatch();

  const handleAddMovie = React.useCallback(
    (addedMovieData) => {
      dispatch(addMovieStart(addedMovieData));
    },
    [dispatch]
  );

  const handleClearMoviesList = React.useCallback(
    () => dispatch(clearMoviesModelState()),
    [dispatch]
  );

  const handleResetMoviesList = React.useCallback(
    () => dispatch(resetMoviesModelState()),
    [dispatch]
  );

  return (
    <div className={classes.moviesListControlPanel}>
      <EditableMovie onEditMovie={handleAddMovie} />
      <MoviesListControlButtonsPanel
        onClearList={handleClearMoviesList}
        onResetList={handleResetMoviesList}
      />
    </div>
  );
};
