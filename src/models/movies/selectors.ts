import { createSelector } from 'reselect';
import { StoreType, IdType } from '@Common/index';

const moviesModel = (store: StoreType) => store.moviesModel;

export const selectMoviesList = createSelector(
  [moviesModel],
  (moviesModelInstance) => moviesModelInstance.movies
);

export const selectMovieById = (movieId: IdType) =>
  createSelector([selectMoviesList], (moviesList) =>
    moviesList.find(({ id }) => id === movieId)
  );

export const selectMoviesIds = createSelector(
  [selectMoviesList],
  (moviesList) => moviesList.map(({ id }) => id)
);
