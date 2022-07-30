import React from 'react';
import CN from 'classnames';
import classes from './styles.module.less';

type ButtonPropsType = {
  description: string;
  className?: string;
  variant?: 'danger' | 'warning';
  isDisabled?: boolean;
  onClick: VoidFunction;
};

export const Button: React.FC<ButtonPropsType> = ({
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
