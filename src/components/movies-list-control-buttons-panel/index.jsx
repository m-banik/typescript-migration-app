import React from 'react';
import PropTypes from 'prop-types';
import { Button } from '..';
import classes from './styles.module.less';

export const MoviesListControlButtonsPanel = ({ onClearList, onResetList }) => (
  <div className={classes.moviesListControlButtonsPanel}>
    <Button description={'Clear'} variant={'danger'} onClick={onClearList} />
    <Button description={'Reset'} variant={'warning'} onClick={onResetList} />
  </div>
);

MoviesListControlButtonsPanel.propTypes = {
  onClearList: PropTypes.func.isRequired,
  onResetList: PropTypes.func.isRequired
};
