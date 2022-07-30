import React from 'react';
import CN from 'classnames';
import classes from './styles.module.less';

type ErrorMessagesPropsType = {
  className?: string;
  isTitleError: boolean;
  isPremiereError: boolean;
  isDirectorError: boolean;
};

export const ErrorMessages: React.FC<ErrorMessagesPropsType> = ({
  className,
  isTitleError,
  isPremiereError,
  isDirectorError
}) => {
  const classNames = CN(classes.errorMessages, { [className]: !!className });

  return (
    <div className={classNames}>
      {isTitleError && (
        <span className={classes.errorMessage}>Movie title is required. </span>
      )}
      {isPremiereError && (
        <span className={classes.errorMessage}>
          Premiere date must count four digits.{' '}
        </span>
      )}
      {isDirectorError && (
        <span className={classes.errorMessage}>
          Movie director is required.
        </span>
      )}
    </div>
  );
};
