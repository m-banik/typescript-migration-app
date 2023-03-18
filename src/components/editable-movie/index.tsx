import React from 'react';
import { useForm } from 'react-hook-form';
import { MovieDataType, MovieDataHandlerType } from '@Common/index';
import { assertIsOfFormMovieDataType } from '@Utilities/index';
import { ElementIndex, Button, ErrorMessages } from '@Components/index';
import classes from './styles.module.less';

type EditableMoviePropsType = {
  elementIndex?: number;
  title?: string;
  premiereDate?: number;
  director?: string;
  onEditMovie: MovieDataHandlerType;
};

export const EditableMovie: React.FC<EditableMoviePropsType> = ({
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
  } = useForm<MovieDataType>();

  const onSubmit = React.useMemo(() => {
    const handleFormData = (data: unknown) => {
      assertIsOfFormMovieDataType(data);

      const premiereDateAsNumber = Number(data.premiereDate);
      if (isNaN(premiereDateAsNumber)) {
        return;
      }

      const movieData = { ...data, premiereDate: premiereDateAsNumber };
      onEditMovie(movieData);
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
          className={`w3-input w3-border w3-round-large ${classes.title}`}
          {...register('title', { required: true })}
        />
        <input
          defaultValue={premiereDate}
          type="number"
          placeholder="Premiere date"
          className={`w3-input w3-border w3-round-large ${classes.premiere}`}
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
          className={`w3-input w3-border w3-round-large ${classes.director}`}
          {...register('director', { required: true })}
        />
        <Button description={'Accept'} className={classes.submitButton} />
      </form>
      <ErrorMessages
        className={classes.errorMessages}
        isTitleError={!!errors.title}
        isPremiereError={!!errors.premiereDate}
        isDirectorError={!!errors.director}
      />
    </div>
  );
};
