import { combineReducers } from 'redux';
import {
  MoviesModelActionType,
  MoviesModelActionCreatorType,
  moviesModelReducer
} from './movies';
import { StoreType } from '@Common/index';

type CommonActionType = MoviesModelActionType;

type CommonActionCreatorType = MoviesModelActionCreatorType;

const rootReducer = combineReducers<StoreType, CommonActionType>({
  moviesModel: moviesModelReducer
});

export { CommonActionType, CommonActionCreatorType, rootReducer };
