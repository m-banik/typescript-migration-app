import { select, put, takeLatest } from 'typed-redux-saga';
import { produce } from 'immer';
import {
  deleteMovieStart,
  selectMoviesList,
  storeMovies,
  DELETE_MOVIE_START
} from '..';

type ActionType = ReturnType<typeof deleteMovieStart>;

export function* onDeleteMovie({ movieId }: ActionType) {
  const newMoviesList = produce(yield* select(selectMoviesList), (draft) =>
    draft.filter(({ id }) => id !== movieId)
  );

  yield* put(storeMovies(newMoviesList));
}

export function* onDeleteMovieStart() {
  yield* takeLatest<typeof DELETE_MOVIE_START, typeof onDeleteMovie>(
    DELETE_MOVIE_START,
    onDeleteMovie
  );
}
