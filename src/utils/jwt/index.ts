import JWT from 'jsonwebtoken';

function verifyJWT<T>(token: string): T | false {
  const secret = process.env.JWT_KEY;

  if (!secret) {
    throw new Error('JWT_KEY not found');
  }

  try {
    return JWT.verify(token, secret) as T;
  } catch (error) {
    return false;
  }
}

export default verifyJWT;
