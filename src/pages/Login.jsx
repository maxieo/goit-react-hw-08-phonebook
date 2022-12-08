import { Helmet } from 'react-helmet';
import { LoginForm } from 'components/LoginForm/LoginForm'; 

function Login() {
  return (
    <div>
      <Helmet>
        <title>LogIn</title>
      </Helmet>
      <LoginForm/>
    </div>
  );
}
export default Login