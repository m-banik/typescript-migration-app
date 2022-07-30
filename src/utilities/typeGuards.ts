import { MovieDataType, FormMovieDataType } from '@Common/index';

export const checkIfIsOfMovieDataType = (
  input: unknown
): input is MovieDataType => {
  const instance = input as MovieDataType;

  return (
    instance instanceof Object &&
    typeof instance.title === 'string' &&
    typeof instance.premiereDate === 'number' &&
    typeof instance.title === 'string'
  );
};

export const checkIfAreOfMovieDataType = (
  input: unknown
): input is MovieDataType[] => {
  const instance = input as MovieDataType[];

  return (
    instance instanceof Array &&
    instance.every((element) => checkIfIsOfMovieDataType(element))
  );
};

export function assertIsOfMovieDataType(
  input: unknown,
  errorMessage = 'Input is of incorrect type!'
): asserts input is MovieDataType {
  if (checkIfIsOfMovieDataType(input)) {
    return;
  }

  throw new Error(errorMessage);
}

export function assertAreOfMovieDataType(
  input: unknown,
  errorMessage = 'Input is of incorrect type!'
): asserts input is MovieDataType[] {
  if (checkIfAreOfMovieDataType(input)) {
    return;
  }

  throw new Error(errorMessage);
}

export const checkIfIsOfFormMovieDataType = (
  input: unknown
): input is FormMovieDataType => {
  const instance = input as FormMovieDataType;

  return (
    instance instanceof Object &&
    typeof instance.title === 'string' &&
    typeof instance.premiereDate === 'string' &&
    typeof instance.title === 'string'
  );
};

export const checkIfAreOfFormMovieDataType = (
  input: unknown
): input is FormMovieDataType[] => {
  const instance = input as FormMovieDataType[];

  return (
    instance instanceof Array &&
    instance.every((element) => checkIfIsOfFormMovieDataType(element))
  );
};

export function assertIsOfFormMovieDataType(
  input: unknown,
  errorMessage = 'Input is of incorrect type!'
): asserts input is FormMovieDataType {
  if (checkIfIsOfFormMovieDataType(input)) {
    return;
  }

  throw new Error(errorMessage);
}

export function assertAreOfFormMovieDataType(
  input: unknown,
  errorMessage = 'Input is of incorrect type!'
): asserts input is FormMovieDataType[] {
  if (checkIfAreOfFormMovieDataType(input)) {
    return;
  }

  throw new Error(errorMessage);
}
