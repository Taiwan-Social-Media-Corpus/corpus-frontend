import API from '@config/api';
import request from '@utils/request';

const deleteSession = async () =>
  request({ method: 'DELETE', url: API.V1.user.session, toJson: false });

export default deleteSession;
