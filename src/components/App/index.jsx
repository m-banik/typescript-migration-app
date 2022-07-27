import React from 'react';
import { MoviesList } from '..';
import './styles.globals.less';
import classes from './styles.module.less';

export const App = () => {
  return (
    <div className={classes.app}>
      <MoviesList />
    </div>
  );
};
