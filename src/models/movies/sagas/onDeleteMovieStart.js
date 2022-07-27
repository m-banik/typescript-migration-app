import { select, put, takeLatest } from 'redux-saga/effects';
import { selectMoviesList, storeMovies, DELETE_MOVIE_START } from '..';
import { produce } from 'immer';

export function* onDeleteMovie({ movieId }) {
  const newMoviesList = produce(yield select(selectMoviesList), (draft) =>
    draft.filter(({ id }) => id !== movieId)
  );

  yield put(storeMovies(newMoviesList));
}

export function* onDeleteMovieStart() {
  yield takeLatest(DELETE_MOVIE_START, onDeleteMovie);
}
