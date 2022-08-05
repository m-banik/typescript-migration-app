import { select, put, takeLatest } from 'typed-redux-saga';
import { nanoid } from 'nanoid';
import { produce } from 'immer';
import {
  AddMovieActionType,
  selectMoviesList,
  storeMovies,
  ADD_MOVIE_START
} from '..';

export function* onAddMovie({ newMovieData }: AddMovieActionType) {
  const newMovie = { ...newMovieData, id: nanoid() };

  const newMoviesList = produce(yield* select(selectMoviesList), (draft) => [
    ...draft,
    newMovie
  ]);

  yield* put(storeMovies(newMoviesList));
}

export function* onAddMovieStart() {
  yield* takeLatest<typeof ADD_MOVIE_START, typeof onAddMovie>(
    ADD_MOVIE_START,
    onAddMovie
  );
}
