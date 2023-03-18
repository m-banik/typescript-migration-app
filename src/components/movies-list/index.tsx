import React from 'react';
import { useSelector } from 'react-redux';
import CN from 'classnames';
import { selectMoviesIds } from '@MoviesModel/index';
import { StoreType } from '@Common/index';
import { MoviesListControlPanel, MoviesListElement } from '@Components/index';
import classes from './styles.module.less';

export const MoviesList: React.FC = () => {
  const moviesIds = useSelector((store: StoreType) => selectMoviesIds(store));

  const headerClasses = CN(classes.header, 'w3-text-white w3-cursive');

  const listClasses = CN(classes.list, 'w3-container w3-yellow', {
    [classes.disabled]: moviesIds.length < 1
  });

  return (
    <div className={classes.moviesList}>
      <h1 className={headerClasses}>My favourites of the Tenth Muse</h1>
      <div className={'w3-panel'}>
        <MoviesListControlPanel />
      </div>
      <ul className={listClasses}>
        {moviesIds.map((movieId, index) => (
          <MoviesListElement
            key={movieId}
            movieId={movieId}
            elementIndex={index}
          />
        ))}
      </ul>
      <p className={classes.footer}>
        <span>
          See more on{' '}
          <a
            href="https://www.filmweb.pl"
            target="_blank"
            rel="noreferrer"
            className={classes.link}
          >
            Filmweb
          </a>
        </span>
        <i className={`${classes.icon} material-icons`}>movie</i>
      </p>
    </div>
  );
};
