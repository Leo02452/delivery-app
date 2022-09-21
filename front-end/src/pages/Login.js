import { useState, useEffect } from 'react';
import userLogin from '../services/login';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);
  const [loginStatus, setLoginStatus] = useState({ failed: false, message: '' });

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
    if (response.message) {
      setLoginStatus({ failed: true, message: response.message });
    }
    console.log(response);
  }

  return (
    <>
      <form>
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
        <label htmlFor="password">
          <span>Password</span>
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
        <button
          type="submit"
          data-testid="common_login__button-login"
          disabled={ isButtonDisabled }
          onClick={ handleClick }
        >
          LOGIN
        </button>
        <button
          type="submit"
          className="login-btn"
          data-testid="common_login__button-register"
        >
          Ainda não tenho conta
        </button>
      </form>
      {
        loginStatus.failed
        && <p data-testid="common_login__element-invalid-email">{loginStatus.message}</p>
      }
    </>
  );
}

export default Login;
