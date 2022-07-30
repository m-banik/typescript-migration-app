import React from 'react';
import { MoviesList } from '@Components/index';
import './styles.globals.less';
import classes from './styles.module.less';

export const App: React.FC = () => (
  <div className={classes.app}>
    <MoviesList />
  </div>
);
