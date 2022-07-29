import React from 'react';
import PropTypes from 'prop-types';
import CN from 'classnames';
import classes from './styles.module.less';

export const Button = ({
  description,
  className,
  variant,
  isDisabled,
  onClick
}) => {
  const classNames = CN(classes.button, {
    [classes[variant]]: !!variant,
    [className]: !!className
  });

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
