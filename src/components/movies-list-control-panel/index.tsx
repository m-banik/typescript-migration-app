import React from 'react';
import { useDispatch } from 'react-redux';
import CN from 'classnames';
import { DispatchType, MovieDataHandlerType } from '@Common/index';
import {
  addMovieStart,
  clearMoviesModelState,
  resetMoviesModelState
} from '@Models/index';
import {
  EditableMovie,
  MoviesListControlButtonsPanel
} from '@Components/index';
import classes from './styles.module.less';

type CustomDispatchType = DispatchType<
  | typeof addMovieStart
  | typeof clearMoviesModelState
  | typeof resetMoviesModelState
>;

export const MoviesListControlPanel: React.FC = () => {
  const dispatch = useDispatch<CustomDispatchType>();

  const handleAddMovie = React.useCallback<MovieDataHandlerType>(
    (addedMovieData) => {
      dispatch(addMovieStart(addedMovieData));
    },
    [dispatch]
  );

  const handleClearMoviesList = React.useCallback<VoidFunction>(
    () => dispatch(clearMoviesModelState()),
    [dispatch]
  );

  const handleResetMoviesList = React.useCallback<VoidFunction>(
    () => dispatch(resetMoviesModelState()),
    [dispatch]
  );

  const classNames = CN(classes.moviesListControlPanel, 'w3-pale-yellow');

  return (
    <div className={classNames}>
      <EditableMovie onEditMovie={handleAddMovie} />
      <MoviesListControlButtonsPanel
        onClearList={handleClearMoviesList}
        onResetList={handleResetMoviesList}
      />
    </div>
  );
};
