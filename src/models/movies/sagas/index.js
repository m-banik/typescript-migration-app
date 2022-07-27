import { all, call } from 'typed-redux-saga';
import { onAddMovieStart } from './onAddMovieStart';
import { onDeleteMovieStart } from './onDeleteMovieStart';
import { onEditMovieStart } from './onEditMovieStart';

export function* moviesModelRootSaga() {
  yield* all([
    call(onAddMovieStart),
    call(onDeleteMovieStart),
    call(onEditMovieStart)
  ]);
}
