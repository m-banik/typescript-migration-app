import React from 'react';
import PropTypes from 'prop-types';
import classes from './styles.module.less';

export const Button = ({
  description,
  className,
  variant,
  isDisabled,
  onClick
}) => {
  const classNames = [
    classes.button,
    variant ? classes[variant] : '',
    className ? className : ''
  ].join(' ');

  return (
    <button className={classNames} disabled={isDisabled} onClick={onClick}>
      {description}
    </button>
  );
};

Button.propTypes = {
  description: PropTypes.string.isRequired,
  className: PropTypes.string,
  variant: PropTypes.oneOf(['danger', 'warning']),
  isDisabled: PropTypes.bool,
  onClick: PropTypes.func
};
