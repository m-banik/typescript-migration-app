import React from 'react';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import { EditableMovie, Movie, MovieButtonPanel } from '..';
import {
  selectMovieById,
  editMovieStart,
  deleteMovieStart
} from '../../models';
import classes from './styles.module.less';

export const MoviesListElement = ({ movieId, elementIndex }) => {
  const movie = useSelector((store) => selectMovieById(movieId)(store));
  const dispatch = useDispatch();

  const [isMovieEdited, setIsMovieEdited] = React.useState(false);

  const handleSetMovieEditionMode = React.useCallback(
    () => setIsMovieEdited(true),
    [setIsMovieEdited]
  );

  const handleUnsetMovieEditionMode = React.useCallback(
    () => setIsMovieEdited(false),
    [setIsMovieEdited]
  );

  const handleEditMovie = React.useCallback(
    (editedMovieData) => {
      const editedMovieProperties = { id: movieId, ...editedMovieData };
      dispatch(editMovieStart(editedMovieProperties));
      handleUnsetMovieEditionMode();
    },
    [movieId, dispatch, handleUnsetMovieEditionMode]
  );

  const handleDeleteMovie = React.useCallback(
    () => dispatch(deleteMovieStart(movieId)),
    [movieId, dispatch]
  );

  return (
    <li className={classes.moviesListElement}>
      {isMovieEdited ? (
        <EditableMovie
          elementIndex={elementIndex}
          title={movie.title}
          premiereDate={movie.premiereDate}
          director={movie.director}
          onEditMovie={handleEditMovie}
        />
      ) : (
        <Movie
          elementIndex={elementIndex}
          title={movie.title}
          premiereDate={movie.premiereDate}
          director={movie.director}
        />
      )}
      <MovieButtonPanel
        isMovieEdited={isMovieEdited}
        onUnsetMovieEditionMode={handleUnsetMovieEditionMode}
        onSetMovieEditionMode={handleSetMovieEditionMode}
        onDeleteMovie={handleDeleteMovie}
      />
    </li>
  );
};

MoviesListElement.propTypes = {
  movieId: PropTypes.string.isRequired,
  elementIndex: PropTypes.number
};
