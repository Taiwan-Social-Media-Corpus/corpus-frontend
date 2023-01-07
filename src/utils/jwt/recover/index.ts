import verifyJWT from '@utils/jwt';
import { RecoveryJWTPayload } from 'types/user';

function verifyRecoveryJWT(reqIp: string, jwtToken: string | undefined, stage: 'code' | 'reset') {
  if (!jwtToken) {
    return false;
  }

  const verifiedToken = verifyJWT<RecoveryJWTPayload>(jwtToken);

  if (verifiedToken === false) {
    return false;
  }

  const invalidStage = verifiedToken.stage !== stage;
  const invalidIP = verifiedToken.callSite !== reqIp;

  if (invalidStage || invalidIP) {
    return false;
  }

  return verifiedToken;
}

export default verifyRecoveryJWT;
