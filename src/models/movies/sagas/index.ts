import { all, call } from 'typed-redux-saga';
import { onAddMovieStart } from './onAddMovieStart';
import { onDeleteMovieStart } from './onDeleteMovieStart';
import { onEditMovieStart } from './onEditMovieStart';

function* moviesModelRootSaga() {
  yield* all([
    call(onAddMovieStart),
    call(onDeleteMovieStart),
    call(onEditMovieStart)
  ]);
}

export {
  onAddMovieStart,
  onDeleteMovieStart,
  onEditMovieStart,
  moviesModelRootSaga
};
