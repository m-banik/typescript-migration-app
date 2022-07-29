import React from 'react';
import { Button } from '..';
import classes from './styles.module.less';

export const MoviesListControlButtonsPanel = ({ onClearList, onResetList }) => {
  return (
    <div className={classes.moviesListControlButtonsPanel}>
      <Button description={'Clear'} variant={'danger'} onClick={onClearList} />
      <Button description={'Reset'} variant={'warning'} onClick={onResetList} />
    </div>
  );
};
