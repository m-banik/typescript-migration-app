import React from 'react';
import PropTypes from 'prop-types';
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
    reset,
    formState: { errors }
  } = useForm();

  const onSubmit = React.useMemo(() => {
    const handleFormData = (data, event) => {
      onEditMovie(data);
      reset();
    };

    return handleSubmit(handleFormData);
  }, [onEditMovie, reset, handleSubmit]);

  return (
    <div className={classes.editableMovie}>
      {elementIndex === undefined ? null : (
        <ElementIndex index={elementIndex} />
      )}
      <form className={classes.editionForm} onSubmit={onSubmit}>
        <input
          defaultValue={title}
          type="text"
          placeholder="Title"
          className={classes.title}
          {...register('title', { required: true })}
        />
        <input
          defaultValue={premiereDate}
          type="number"
          placeholder="Premiere date"
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
          placeholder="Director"
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

EditableMovie.propTypes = {
  elementIndex: PropTypes.number,
  title: PropTypes.string,
  premiereDate: PropTypes.number,
  director: PropTypes.string,
  onEditMovie: PropTypes.func.isRequired
};
