import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  IdType,
  StoreType,
  ThunkDispatchType,
  MovieDataHandlerType
} from '@Common/index';
import {
  selectMovieById,
  editMovieStart,
  deleteMovieStart
} from '@Models/index';
import { EditableMovie, Movie, MovieButtonPanel } from '@Components/index';
import classes from './styles.module.less';

type MoviesListElementPropsType = {
  movieId: IdType;
  elementIndex?: number;
};

type CustomDispatchType = ThunkDispatchType<
  typeof editMovieStart | typeof deleteMovieStart
>;

export const MoviesListElement: React.FC<MoviesListElementPropsType> = ({
  movieId,
  elementIndex
}) => {
  const movie = useSelector((store: StoreType) =>
    selectMovieById(movieId)(store)
  );
  const dispatch = useDispatch<CustomDispatchType>();

  const [isMovieEdited, setIsMovieEdited] = React.useState(false);

  const handleSetMovieEditionMode = React.useCallback<VoidFunction>(
    () => setIsMovieEdited(true),
    [setIsMovieEdited]
  );

  const handleUnsetMovieEditionMode = React.useCallback<VoidFunction>(
    () => setIsMovieEdited(false),
    [setIsMovieEdited]
  );

  const handleEditMovie = React.useCallback<MovieDataHandlerType>(
    (editedMovieData) => {
      const editedMovieProperties = { id: movieId, ...editedMovieData };
      dispatch(editMovieStart(editedMovieProperties));
      handleUnsetMovieEditionMode();
    },
    [movieId, dispatch, handleUnsetMovieEditionMode]
  );

  const handleDeleteMovie = React.useCallback<VoidFunction>(
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
