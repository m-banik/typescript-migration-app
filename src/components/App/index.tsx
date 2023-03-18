import React from 'react';
import CN from 'classnames';
import { MoviesList } from '@Components/index';
import './styles.globals.less';
import classes from './styles.module.less';

export const App: React.FC = () => {
  const classNames = CN(classes.app, 'w3-container w3-teal');

  return (
    <div className={classNames}>
      <MoviesList />
    </div>
  );
};
