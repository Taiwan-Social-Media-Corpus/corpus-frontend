import { NextPageWithControl } from 'types';
import RecoveryBase from '@components/pages/User/Recovery/Base';
import Identification from '@components/pages/User/Recovery/Identification';

const Recovery: NextPageWithControl = () => <Identification />;

Recovery.control = {
  Layout: (props) => (
    <RecoveryBase
      title="尋找你的帳號"
      subTitle="請輸入你的電子郵件地址以搜尋帳號。"
      containerSize={460}
    >
      {props.children}
    </RecoveryBase>
  ),
};

export default Recovery;
