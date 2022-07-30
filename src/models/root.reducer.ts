import { combineReducers } from 'redux';
import { MoviesModelActionType, moviesModelReducer } from './movies';
import { StoreType } from '@Common/index';

type CommonActionType = MoviesModelActionType;

const rootReducer = combineReducers<StoreType, CommonActionType>({
  moviesModel: moviesModelReducer
});

export { CommonActionType, rootReducer };
