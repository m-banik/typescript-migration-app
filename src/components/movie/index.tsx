import React from 'react';
import { ElementIndex } from '@Components/index';
import classes from './styles.module.less';

type MoviePropsType = {
  elementIndex?: number;
  title: string;
  premiereDate: number;
  director: string;
};

export const Movie: React.FC<MoviePropsType> = ({
  elementIndex,
  title,
  premiereDate,
  director
}) => (
  <div className={classes.movie}>
    {elementIndex === undefined ? null : <ElementIndex index={elementIndex} />}
    <span className={classes.title}>{title}</span>
    <span className={classes.premiere}>({premiereDate})</span>-{' '}
    <span>{director}</span>
  </div>
);
