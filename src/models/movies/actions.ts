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

export type AddMovieStartType = typeof addMovieStart;
export type EditMovieStartType = typeof editMovieStart;
export type DeleteMovieStartType = typeof deleteMovieStart;
export type StoreMoviesType = typeof storeMovies;
export type ResetMoviesModelStateType = typeof resetMoviesModelState;
export type ClearMoviesModelStateType = typeof clearMoviesModelState;

export type MoviesModelActionCreatorType =
  | AddMovieStartType
  | EditMovieStartType
  | DeleteMovieStartType
  | StoreMoviesType
  | ResetMoviesModelStateType
  | ClearMoviesModelStateType;

export type AddMovieActionType = ReturnType<AddMovieStartType>;
export type EditMovieActionType = ReturnType<EditMovieStartType>;
export type DeleteMovieActionType = ReturnType<DeleteMovieStartType>;
export type StoreMoviesActionType = ReturnType<StoreMoviesType>;
export type ResetMoviesModelStateActionType =
  ReturnType<ResetMoviesModelStateType>;
export type ClearMoviesModelStateActionType =
  ReturnType<ClearMoviesModelStateType>;

export type MoviesModelActionType =
  | AddMovieActionType
  | EditMovieActionType
  | DeleteMovieActionType
  | StoreMoviesActionType
  | ResetMoviesModelStateActionType
  | ClearMoviesModelStateActionType;
