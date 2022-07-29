import React from 'react';
import { useForm } from 'react-hook-form';
import { ElementIndex, Button } from '..';
import classes from './styles.module.less';

export const EditableMovie = ({
  elementIndex,
  title,
  premiereDate,
  director,
  onEditMovie
}) => {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm();

  const onSubmit = React.useMemo(() => {
    const handleFormData = (data, event) => {
      onEditMovie(data);
    };

    return handleSubmit(handleFormData);
  }, [onEditMovie, handleSubmit]);

  return (
    <div className={classes.editableMovie}>
      {elementIndex === undefined ? null : (
        <ElementIndex index={elementIndex} />
      )}
      <form className={classes.editionForm} onSubmit={onSubmit}>
        <input
          defaultValue={title}
          type="text"
          className={classes.title}
          {...register('title', { required: true })}
        />
        <input
          defaultValue={premiereDate}
          type="number"
          className={classes.premiere}
          {...register('premiereDate', {
            required: true,
            minLength: 4,
            maxLength: 4
          })}
        />
        <input
          defaultValue={director}
          type="text"
          className={classes.director}
          {...register('director', { required: true })}
        />
        <Button description={'Accept'} className={classes.submitButton} />
      </form>
      <div className={classes.errorMessages}>
        {errors.title && (
          <span className={classes.errorMessage}>
            Movie title is required.{' '}
          </span>
        )}
        {errors.premiereDate && (
          <span className={classes.errorMessage}>
            Premiere date must count four digits.{' '}
          </span>
        )}
        {errors.director && (
          <span className={classes.errorMessage}>
            Movie director is required.
          </span>
        )}
      </div>
    </div>
  );
};
