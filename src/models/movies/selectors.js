import { createSelector } from 'reselect';

const moviesModel = (store) => store.moviesModel;

export const selectMoviesList = createSelector(
  [moviesModel],
  (moviesModelInstance) => moviesModelInstance.movies
);

export const selectMovieById = (movieId) =>
  createSelector([selectMoviesList], (moviesList) =>
    moviesList.find(({ id }) => id === movieId)
  );

export const selectMoviesIds = createSelector(
  [selectMoviesList],
  (moviesList) => moviesList.map(({ id }) => id)
);
