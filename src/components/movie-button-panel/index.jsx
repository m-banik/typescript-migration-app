import React from 'react';
import { Button } from '..';
import classes from './styles.module.less';

export const MovieButtonPanel = ({
  isMovieEdited,
  onUnsetMovieEditionMode,
  onSetMovieEditionMode,
  onDeleteMovie
}) => {
  return (
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
      <Button
        description={'Accept'}
        isDisabled={!isMovieEdited}
        onClick={() => console.log('Hello')}
      />
      <Button
        description={'Delete'}
        variant={'danger'}
        onClick={onDeleteMovie}
      />
    </div>
  );
};
