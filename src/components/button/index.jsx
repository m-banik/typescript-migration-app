import React from 'react';
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
