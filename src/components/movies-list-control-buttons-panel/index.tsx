import React from 'react';
import { Button } from '@Components/index';
import classes from './styles.module.less';

type MoviesListControlButtonsPanelPropsType = {
  onClearList: VoidFunction;
  onResetList: VoidFunction;
};

export const MoviesListControlButtonsPanel: React.FC<
  MoviesListControlButtonsPanelPropsType
> = ({ onClearList, onResetList }) => (
  <div className={classes.moviesListControlButtonsPanel}>
    <Button description={'Clear'} variant={'danger'} onClick={onClearList} />
    <Button description={'Reset'} variant={'warning'} onClick={onResetList} />
  </div>
);
