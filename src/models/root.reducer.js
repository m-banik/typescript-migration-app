import { combineReducers } from 'redux';
import { moviesModelReducer } from './movies';

export const rootReducer = combineReducers({
  moviesModel: moviesModelReducer
});
