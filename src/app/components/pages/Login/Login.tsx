import './styleLogin.css'
import Header from "../../organisms/header/Header";
import FormLogin from '../../molecules/formlogin/FormLogin';

const Login = () => {
  return (
    <div className='containerLogin'>
      <Header/>
      <div className='bodyLogin'>
        <FormLogin/>
      </div>
    </div>
    
  );
}

export default Login;