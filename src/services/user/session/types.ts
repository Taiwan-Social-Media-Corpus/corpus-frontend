import { Response } from 'types';
import { User } from 'types/user';

export type Payload = Pick<User, 'email' | 'password'>;

type ResData = Pick<User, 'uid' | 'email' | 'firstName' | 'lastName' | 'activated'>;
export type ResponseType = Response<ResData> | null;
