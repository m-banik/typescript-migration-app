import { all, call } from 'typed-redux-saga';
import { moviesModelRootSaga } from './movies';

export function* rootSaga() {
  yield* all([call(moviesModelRootSaga)]);
}
