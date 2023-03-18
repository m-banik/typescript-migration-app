import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import CN from 'classnames';
import {
  IdType,
  StoreType,
  DispatchType,
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

type CustomDispatchType = DispatchType<
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

  const classNames = CN(classes.moviesListElement, 'w3-round-large');

  return (
    <li className={classNames}>
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
