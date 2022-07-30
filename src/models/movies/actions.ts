import * as moviesActionTypes from './types';
import { MovieType, EditedMovieType, IdType } from '@Common/index';

export const addMovieStart = (newMovie: MovieType) =>
  ({
    type: moviesActionTypes.ADD_MOVIE_START,
    newMovie
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

export type MoviesModelActionType = ReturnType<
  | typeof addMovieStart
  | typeof editMovieStart
  | typeof deleteMovieStart
  | typeof storeMovies
  | typeof resetMoviesModelState
  | typeof clearMoviesModelState
>;
