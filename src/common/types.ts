import { nanoid } from 'nanoid';
import { Action, Dispatch } from 'redux';
import { ThunkDispatch } from 'redux-thunk';
import {
  CommonActionCreatorType,
  CommonActionWithDispatchCreatorType
} from '../models/root.reducer';

export type { Reducer as ReducerType } from 'redux';

export type IdType = ReturnType<typeof nanoid>;

export type MovieType = {
  id: IdType;
  title: string;
  premiereDate: number;
  director: string;
};

export type EditedMovieType = Pick<MovieType, 'id'> & Partial<MovieType>;

export type MovieDataType = Omit<MovieType, 'id'>;

export type MovieDataHandlerType = (movieData: MovieDataType) => void;

export type FormMovieDataType = Omit<MovieDataType, 'premiereDate'> & {
  premiereDate: string;
};

export type MoviesModelStateType = {
  movies: MovieType[];
};

export type StoreType = {
  moviesModel: MoviesModelStateType;
};

export type DispatchType<T extends CommonActionCreatorType> = Dispatch<
  ReturnType<T>
>;

export type ThunkDispatchType<T extends CommonActionWithDispatchCreatorType> =
  ThunkDispatch<StoreType, {}, Action<T>>;

export type ThunkActionCreatorType<
  T extends CommonActionCreatorType,
  K extends unknown[]
> = (
  ...args: K
) => (dispatch: DispatchType<T>, getState: () => StoreType) => void;
