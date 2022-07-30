import { select, put, takeLatest } from 'typed-redux-saga';
import { produce } from 'immer';
import {
  editMovieStart,
  selectMoviesList,
  storeMovies,
  EDIT_MOVIE_START
} from '..';

type ActionType = ReturnType<typeof editMovieStart>;

export function* onEditMovie({ editedMovieProperties }: ActionType) {
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
