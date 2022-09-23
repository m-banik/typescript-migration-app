import { combineReducers } from 'redux';
import {
  MoviesModelActionType,
  MoviesModelActionCreatorType,
  MoviesModelActionWithDispatchCreatorType,
  moviesModelReducer
} from './movies';
import { StoreType } from '@Common/index';

export type CommonActionType = MoviesModelActionType;

export type CommonActionCreatorType = MoviesModelActionCreatorType;

export type CommonActionWithDispatchCreatorType =
  MoviesModelActionWithDispatchCreatorType;

export const rootReducer = combineReducers<StoreType, CommonActionType>({
  moviesModel: moviesModelReducer
});
