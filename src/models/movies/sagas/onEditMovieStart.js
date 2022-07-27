import { select, put, takeLatest } from 'redux-saga/effects';
import { selectMoviesList, storeMovies, EDIT_MOVIE_START } from '..';
import { produce } from 'immer';

export function* onEditMovie({ editedMovieProperties }) {
  const newMoviesList = produce(yield select(selectMoviesList), (draft) =>
    draft.map((movie) =>
      movie.id === editedMovieProperties.id
        ? { ...movie, ...editedMovieProperties }
        : movie
    )
  );

  yield put(storeMovies(newMoviesList));
}

export function* onEditMovieStart() {
  yield takeLatest(EDIT_MOVIE_START, onEditMovie);
}
