import * as moviesActionTypes from './types';
import {
  MovieDataType,
  EditedMovieType,
  IdType,
  MovieType
} from '@Common/index';

export const addMovieStart = (newMovieData: MovieDataType) =>
  ({
    type: moviesActionTypes.ADD_MOVIE_START,
    newMovieData
  } as const);

export const editMovieStart = (editedMovieProperties: EditedMovieType) =>
  ({
    type: moviesActionTypes.EDIT_MOVIE_START,
    editedMovieProperties
  } as const);

export const deleteMovieStart = (movieId: IdType) =>
  ({
    type: moviesActionTypes.DELETE_MOVIE_START,
    movieId
  } as const);

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

export type AddMovieActionType = ReturnType<typeof addMovieStart>;
export type EditMovieActionType = ReturnType<typeof editMovieStart>;
export type DeleteMovieActionType = ReturnType<typeof deleteMovieStart>;
export type StoreMoviesActionType = ReturnType<typeof storeMovies>;
export type ResetMoviesModelStateActionType = ReturnType<
  typeof resetMoviesModelState
>;
export type ClearMoviesModelStateActionType = ReturnType<
  typeof clearMoviesModelState
>;

export type MoviesModelActionType =
  | AddMovieActionType
  | EditMovieActionType
  | DeleteMovieActionType
  | StoreMoviesActionType
  | ResetMoviesModelStateActionType
  | ClearMoviesModelStateActionType;
