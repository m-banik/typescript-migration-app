import { all, call } from 'redux-saga/effects';
import { moviesModelRootSaga } from './movies';

export function* rootSaga() {
  yield all([call(moviesModelRootSaga)]);
}
