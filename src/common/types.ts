import { nanoid } from 'nanoid';
export type { Reducer as ReducerType, Dispatch as DispatchType } from 'redux';

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
