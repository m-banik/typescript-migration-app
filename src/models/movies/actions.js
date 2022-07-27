import * as moviesActionTypes from './types';

export const addMovieStart = (newMovie) => ({
  type: moviesActionTypes.ADD_MOVIE_START,
  newMovie
});

export const editMovieStart = (editedMovieProperties) => ({
  type: moviesActionTypes.EDIT_MOVIE_START,
  editedMovieProperties
});

export const deleteMovieStart = (movieId) => ({
  type: moviesActionTypes.DELETE_MOVIE_START,
  movieId
});

export const storeMovies = (storedMovies) => ({
  type: moviesActionTypes.STORE_MOVIES,
  storedMovies
});

export const resetMoviesModelState = () => ({
  type: moviesActionTypes.RESET_MOVIES_MODEL_STATE
});

export const clearMoviesModelState = () => ({
  type: moviesActionTypes.CLEAR_MOVIES_MODEL_STATE
});
