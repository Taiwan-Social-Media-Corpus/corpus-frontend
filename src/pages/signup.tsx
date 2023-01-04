import { NextPage } from 'next';
import MobileSignUpForm from '@components/pages/User/SignUp/Mobile';
import AuthenticationLayout from '@components/layout/Authentication';
import DesktopSignUpForm from '@components/pages/User/SignUp/Desktop';

const SignUp: NextPage = () => (
  <AuthenticationLayout title="Sign up to LOPEN">
    <MobileSignUpForm />
    <DesktopSignUpForm />
  </AuthenticationLayout>
);

export default SignUp;
