import * as moviesActionTypes from './types';
import { moviesSamplesList } from '../../common';
import { produce } from 'immer';

const clearMoviesModelState = {
  movies: []
};

const initialMoviesModelState = {
  movies: moviesSamplesList
};

export const moviesModelReducer = (state = initialMoviesModelState, action) =>
  produce(state, (draft) => {
    switch (action.type) {
      case moviesActionTypes.STORE_MOVIES:
        return {
          ...draft,
          movies: action.storedMovies
        };
      case moviesActionTypes.RESET_MOVIES_MODEL_STATE:
        return {
          ...initialMoviesModelState
        };
      case moviesActionTypes.CLEAR_MOVIES_MODEL_STATE:
        return {
          ...clearMoviesModelState
        };
      default:
        break;
    }
  });
