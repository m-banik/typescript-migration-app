import { select, put, takeLatest } from 'typed-redux-saga';
import { produce } from 'immer';
import {
  EditMovieActionType,
  selectMoviesList,
  storeMovies,
  EDIT_MOVIE_START
} from '..';

export function* onEditMovie({ editedMovieProperties }: EditMovieActionType) {
  const newMoviesList = produce(yield* select(selectMoviesList), (draft) =>
    draft.map((movie) =>
      movie.id === editedMovieProperties.id
        ? { ...movie, ...editedMovieProperties }
        : movie
    )
  );

  yield* put(storeMovies(newMoviesList));
}

export function* onEditMovieStart() {
  yield* takeLatest<typeof EDIT_MOVIE_START, typeof onEditMovie>(
    EDIT_MOVIE_START,
    onEditMovie
  );
}
