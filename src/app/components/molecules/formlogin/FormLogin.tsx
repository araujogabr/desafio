import Input from '../../atoms/input/Input';
import PrimaryButton from '../../atoms/primarybutton/PrimaryButton';
import SubmitButton from '../../atoms/submitButton/SubmitButton';
import './styleFormLogin.css'

const FormLogin = () => {
  return (
    <div className='container'>
      <h1>Login</h1>
      <form action="">
        <Input
          label='Email'
          type='email'
          placeholder='exemplo@email.com'
        />

        <Input
          label='Senha'
          type='password'
          placeholder=''
        />

        <div className='esqueci'>
          <a href="">Esqueci minha senha</a>
        </div>

        <SubmitButton
          label='Sign in'
        />

      </form>

      <span>Ou</span>

      
   


    </div>
  );
}

export default FormLogin;