import { z } from 'zod';

const signUpSchema = {
  firstName: z.string().min(1, '必填！'),
  lastName: z.string().min(1, '必填！'),
  email: z.string().min(1, '必填！').email('請確認 email 格式'),
  password: z.string().min(8, '請設定 8 個字元以上的密碼'),
  confirmPassword: z.string().min(1, '必填！'),
  termsWatched: z.string().array().min(1, '請確認是否同意！'),
};

const defaultValues = {
  firstName: '',
  lastName: '',
  email: '',
  password: '',
  confirmPassword: '',
  termsWatched: [],
};

export { signUpSchema, defaultValues };
