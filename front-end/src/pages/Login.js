import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import userLogin from '../services/login';
import { MainLoginPage, ContentLoginPage, Form, ButtonLogin,
  ButtonCreate } from './styles/login.style';
import { getUser, saveUser } from '../helpers/userStorage';

function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);
  const [loginStatus, setLoginStatus] = useState({ status: '', message: '' });

  useEffect(() => {
    const user = getUser();

    if (user) {
      navigate('/customer/products');
    }
  }, []);

  useEffect(() => {
    const enableButton = () => {
      const emailFormat = /[a-zA-Z0-9._]+@[a-zA-Z]+\.[a-zA-Z.]*\w$/;
      const isEmailValid = emailFormat.test(email);
      const minPasswordCaracters = 6;
      const isPasswordValid = password.length >= minPasswordCaracters;
      setIsButtonDisabled(!(isEmailValid && isPasswordValid));
    };
    enableButton();
  }, [email, password]);

  async function handleClick() {
    const response = await userLogin({ email, password });
    // console.log(response);
    if (response.message) {
      setLoginStatus({ status: 'failed', message: response.message });
    } else {
      setLoginStatus({ status: 'success', message: '' });
      saveUser(response.data);
      navigate('/customer/products');
    }
  }

  return (
    <MainLoginPage>
      <ContentLoginPage>
        <Form>
          <span>Login</span>
          <label htmlFor="email">
            <input
              type="text"
              id="email"
              data-testid="common_login__input-email"
              name="email"
              placeholder="E-mail"
              value={ email }
              onChange={ ({ target }) => setEmail(target.value) }
            />
          </label>
          <span>Password</span>
          <label htmlFor="password">
            <input
              id="password"
              type="password"
              data-testid="common_login__input-password"
              name="password"
              placeholder="Senha"
              value={ password }
              onChange={ ({ target }) => setPassword(target.value) }
            />
          </label>
          <ButtonLogin
            type="button"
            data-testid="common_login__button-login"
            disabled={ isButtonDisabled }
            onClick={ () => handleClick() }
          >
            LOGIN
          </ButtonLogin>
          <ButtonCreate
            type="button"
            className="login-btn"
            data-testid="common_login__button-register"
            onClick={ () => navigate('/register') }
          >
            Ainda não tenho conta
          </ButtonCreate>
        </Form>
        {
          loginStatus.status === 'failed' && (
            <p
              data-testid="common_login__element-invalid-email"
            >
              {loginStatus.message}
            </p>)
        }
      </ContentLoginPage>
    </MainLoginPage>
  );
}

export default Login;
