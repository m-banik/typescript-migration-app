import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { EditableMovie, Movie, MovieButtonPanel } from '..';
import { selectMovieById, deleteMovieStart } from '../../models';
import classes from './styles.module.less';

export const MoviesListElement = ({ movieId, elementIndex }) => {
  const movie = useSelector((store) => selectMovieById(movieId)(store));
  const dispatch = useDispatch();

  const [isMovieEdited, setIsMovieEdited] = React.useState(false);

  const handleDeleteMovie = React.useCallback(
    () => dispatch(deleteMovieStart(movieId)),
    [movieId, dispatch]
  );

  const handleSetMovieEditionMode = React.useCallback(
    () => setIsMovieEdited(true),
    [setIsMovieEdited]
  );

  const handleUnsetMovieEditionMode = React.useCallback(
    () => setIsMovieEdited(false),
    [setIsMovieEdited]
  );

  return (
    <li className={classes.moviesListElement}>
      {isMovieEdited ? (
        <EditableMovie
          elementIndex={elementIndex}
          title={movie.title}
          premiereDate={movie.premiere_date}
          director={movie.director}
        />
      ) : (
        <Movie
          elementIndex={elementIndex}
          title={movie.title}
          premiereDate={movie.premiere_date}
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
