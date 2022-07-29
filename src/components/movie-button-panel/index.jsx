import React from 'react';
import PropTypes from 'prop-types';
import { Button } from '..';
import classes from './styles.module.less';

export const MovieButtonPanel = ({
  isMovieEdited,
  onUnsetMovieEditionMode,
  onSetMovieEditionMode,
  onDeleteMovie
}) => (
  <div className={classes.movieButtonPanel}>
    {isMovieEdited ? (
      <Button
        description={'Cancel'}
        variant={'warning'}
        onClick={onUnsetMovieEditionMode}
      />
    ) : (
      <Button description={'Edit'} onClick={onSetMovieEditionMode} />
    )}
    <Button description={'Delete'} variant={'danger'} onClick={onDeleteMovie} />
  </div>
);

MovieButtonPanel.propTypes = {
  isMovieEdited: PropTypes.bool.isRequired,
  onUnsetMovieEditionMode: PropTypes.func.isRequired,
  onSetMovieEditionMode: PropTypes.func.isRequired,
  onDeleteMovie: PropTypes.func.isRequired
};
