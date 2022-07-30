import React from 'react';
import PropTypes from 'prop-types';
import CN from 'classnames';
import classes from './styles.module.less';

export const ErrorMessages = ({
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

ErrorMessages.propTypes = {
  className: PropTypes.string,
  isTitleError: PropTypes.bool.isRequired,
  isPremiereError: PropTypes.bool.isRequired,
  isDirectorError: PropTypes.bool.isRequired
};
