import { select, put, takeLatest } from 'typed-redux-saga';
import { nanoid } from 'nanoid';
import { produce } from 'immer';
import {
  addMovieStart,
  selectMoviesList,
  storeMovies,
  ADD_MOVIE_START
} from '..';

type ActionType = ReturnType<typeof addMovieStart>;

export function* onAddMovie({ newMovie }: ActionType) {
  const completedNewMovie = { ...newMovie, id: nanoid() };

  const newMoviesList = produce(yield* select(selectMoviesList), (draft) => [
    ...draft,
    completedNewMovie
  ]);

  yield* put(storeMovies(newMoviesList));
}

export function* onAddMovieStart() {
  yield* takeLatest<typeof ADD_MOVIE_START, typeof onAddMovie>(
    ADD_MOVIE_START,
    onAddMovie
  );
}
