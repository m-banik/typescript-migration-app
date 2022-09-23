import { nanoid } from 'nanoid';
import { produce } from 'immer';
import * as moviesActionTypes from './types';
import { selectMoviesList } from './selectors';
import {
  MovieType,
  ThunkActionCreatorType,
  MovieDataType,
  EditedMovieType,
  IdType
} from '@Common/index';

export const storeMovies = (storedMovies: MovieType[]) =>
  ({
    type: moviesActionTypes.STORE_MOVIES,
    storedMovies
  } as const);

export const resetMoviesModelState = () =>
  ({
    type: moviesActionTypes.RESET_MOVIES_MODEL_STATE
  } as const);

export const clearMoviesModelState = () =>
  ({
    type: moviesActionTypes.CLEAR_MOVIES_MODEL_STATE
  } as const);

export type StoreMoviesType = typeof storeMovies;
export type ResetMoviesModelStateType = typeof resetMoviesModelState;
export type ClearMoviesModelStateType = typeof clearMoviesModelState;

export type MoviesModelActionCreatorType =
  | StoreMoviesType
  | ResetMoviesModelStateType
  | ClearMoviesModelStateType;

export type StoreMoviesActionType = ReturnType<StoreMoviesType>;
export type ResetMoviesModelStateActionType =
  ReturnType<ResetMoviesModelStateType>;
export type ClearMoviesModelStateActionType =
  ReturnType<ClearMoviesModelStateType>;

export type MoviesModelActionType =
  | StoreMoviesActionType
  | ResetMoviesModelStateActionType
  | ClearMoviesModelStateActionType;

export const addMovieStart: ThunkActionCreatorType<
  StoreMoviesType,
  [newMovieData: MovieDataType]
> = (newMovieData) => (dispatch, getState) => {
  const newMovie = { ...newMovieData, id: nanoid() };

  const state = getState();

  const newMoviesList = produce(selectMoviesList(state), (draft) => [
    ...draft,
    newMovie
  ]);

  dispatch(storeMovies(newMoviesList));
};

export const editMovieStart: ThunkActionCreatorType<
  StoreMoviesType,
  [editedMovieProperties: EditedMovieType]
> = (editedMovieProperties) => (dispatch, getState) => {
  const state = getState();

  const newMoviesList = produce(selectMoviesList(state), (draft) =>
    draft.map((movie) =>
      movie.id === editedMovieProperties.id
        ? { ...movie, ...editedMovieProperties }
        : movie
    )
  );

  dispatch(storeMovies(newMoviesList));
};

export const deleteMovieStart: ThunkActionCreatorType<
  StoreMoviesType,
  [movieId: IdType]
> = (movieId) => (dispatch, getState) => {
  const state = getState();

  const newMoviesList = produce(selectMoviesList(state), (draft) =>
    draft.filter(({ id }) => id !== movieId)
  );

  dispatch(storeMovies(newMoviesList));
};

export type AddMovieStartType = typeof addMovieStart;
export type EditMovieStartType = typeof editMovieStart;
export type DeleteMovieStartType = typeof deleteMovieStart;

export type MoviesModelActionWithDispatchCreatorType =
  | AddMovieStartType
  | EditMovieStartType
  | DeleteMovieStartType;

export type AddMovieActionType = ReturnType<AddMovieStartType>;
export type EditMovieActionType = ReturnType<EditMovieStartType>;
export type DeleteMovieActionType = ReturnType<DeleteMovieStartType>;

export type MoviesModelActionWithDispatchType =
  | AddMovieActionType
  | EditMovieActionType
  | DeleteMovieActionType;
