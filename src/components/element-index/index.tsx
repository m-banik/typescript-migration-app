import React from 'react';
import CN from 'classnames';
import classes from './styles.module.less';

type ElementIndexPropsType = {
  index: number;
};

export const ElementIndex: React.FC<ElementIndexPropsType> = ({ index }) => {
  const classNames = CN(classes.elementIndex, {
    [classes.greater]: index >= 9
  });

  return <span className={classNames}>{index + 1}</span>;
};
