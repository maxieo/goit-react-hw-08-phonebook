import { Helmet } from 'react-helmet';
import { LoginForm } from '../redux/auth/operations'

export default function Login() {
  return (
    <div>
      <Helmet>
        <title>LogIn</title>
      </Helmet>
      <LoginForm/>
    </div>
  );
}
