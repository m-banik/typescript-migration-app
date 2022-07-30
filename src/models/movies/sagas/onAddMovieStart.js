import { select, put, takeLatest } from 'redux-saga/effects';
import { nanoid } from 'nanoid';
import { produce } from 'immer';
import { selectMoviesList, storeMovies, ADD_MOVIE_START } from '..';

export function* onAddMovie({ newMovie }) {
  const completedNewMovie = { ...newMovie, id: nanoid() };

  const newMoviesList = produce(yield select(selectMoviesList), (draft) => [
    ...draft,
    completedNewMovie
  ]);

  yield put(storeMovies(newMoviesList));
}

export function* onAddMovieStart() {
  yield takeLatest(ADD_MOVIE_START, onAddMovie);
}
