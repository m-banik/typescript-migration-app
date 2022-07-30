import { produce } from 'immer';
import { MoviesModelActionType } from '.';
import * as moviesActionTypes from './types';
import {
  MoviesModelStateType,
  moviesSamplesList,
  ReducerType
} from '@Common/index';

const clearMoviesModelState: MoviesModelStateType = {
  movies: []
};

const initialMoviesModelState: MoviesModelStateType = {
  movies: moviesSamplesList
};

export const moviesModelReducer: ReducerType<
  MoviesModelStateType,
  MoviesModelActionType
> = (state = initialMoviesModelState, action) =>
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
