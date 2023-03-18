import React from 'react';
import CN from 'classnames';
import { Button } from '@Components/index';
import classes from './styles.module.less';

type MovieButtonPanelPropsType = {
  className?: string;
  isMovieEdited: boolean;
  onUnsetMovieEditionMode: VoidFunction;
  onSetMovieEditionMode: VoidFunction;
  onDeleteMovie: VoidFunction;
};

export const MovieButtonPanel: React.FC<MovieButtonPanelPropsType> = ({
  className,
  isMovieEdited,
  onUnsetMovieEditionMode,
  onSetMovieEditionMode,
  onDeleteMovie
}) => {
  const classNames = CN(classes.movieButtonPanel, className);

  return (
    <div className={classNames}>
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
        description={'Delete'}
        variant={'danger'}
        onClick={onDeleteMovie}
      />
    </div>
  );
};
