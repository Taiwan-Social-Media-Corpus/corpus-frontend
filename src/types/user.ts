export interface User {
  uid: string;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  enabled: boolean;
}

export interface RecoveryJWTPayload {
  callSite: string;
  stage: string;
  email: string;
  iat: number;
  exp: number;
}
