import React from 'react';
import CN from 'classnames';
import classes from './styles.module.less';

type ButtonPropsType = {
  description: string;
  className?: string;
  variant?: 'danger' | 'warning';
  isDisabled?: boolean;
  onClick?: VoidFunction;
};

export const Button: React.FC<ButtonPropsType> = ({
  description,
  className,
  variant,
  isDisabled,
  onClick
}) => {
  const classNames = CN('w3-btn w3-round-large w3-small', {
    'w3-blue': !variant,
    'w3-amber': variant === 'warning',
    'w3-red': variant === 'danger',
    'w3-disabled': isDisabled,
    [classes.button]: !isDisabled,
    [className]: !!className
  });

  return (
    <button className={classNames} disabled={isDisabled} onClick={onClick}>
      {description}
    </button>
  );
};
