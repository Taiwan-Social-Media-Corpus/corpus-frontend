import { User } from 'types/user';

export type FieldValues = Pick<User, 'firstName' | 'lastName' | 'email' | 'password'> & {
  confirmPassword: string;
  termsWatched: Array<string>;
};
