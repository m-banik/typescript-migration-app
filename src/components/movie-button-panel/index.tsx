import React from 'react';
import { Button } from '@Components/index';
import classes from './styles.module.less';

type MovieButtonPanelPropsType = {
  isMovieEdited: boolean;
  onUnsetMovieEditionMode: VoidFunction;
  onSetMovieEditionMode: VoidFunction;
  onDeleteMovie: VoidFunction;
};

export const MovieButtonPanel: React.FC<MovieButtonPanelPropsType> = ({
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
