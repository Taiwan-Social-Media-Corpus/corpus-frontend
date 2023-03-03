import { NextPageWithControl } from 'types';
import AccountPage from '@components/pages/User/Dashboard/Account';
import DashboardBase from '@components/pages/User/Dashboard/Base';

const Account: NextPageWithControl = () => <AccountPage />;

Account.control = {
  auth: true,
  Layout: (props) => <DashboardBase title="Account Settings">{props.children}</DashboardBase>,
};

export default Account;
