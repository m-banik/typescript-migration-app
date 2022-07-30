import { all, call } from 'redux-saga/effects';
import { onAddMovieStart } from './onAddMovieStart';
import { onDeleteMovieStart } from './onDeleteMovieStart';
import { onEditMovieStart } from './onEditMovieStart';

export function* moviesModelRootSaga() {
  yield all([
    call(onAddMovieStart),
    call(onDeleteMovieStart),
    call(onEditMovieStart)
  ]);
}
