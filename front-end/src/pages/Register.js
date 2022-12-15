import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ContentRegister, MainRegister, Form,
  ButtonRegister } from './styles/register.styles';
import userRegister from '../services/register';

function Register() {
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [registerStatus, setRegisterStatus] = useState({ status: '', message: '' });
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);

  useEffect(() => {
    const enableButton = () => {
      const minNameCaracters = 12;
      const isNameValid = name.length >= minNameCaracters;
      const emailFormat = /[a-zA-Z0-9._]+@[a-zA-Z]+\.[a-zA-Z.]*\w$/;
      const isEmailValid = emailFormat.test(email);
      const minPasswordCaracters = 6;
      const isPasswordValid = password.length >= minPasswordCaracters;
      setIsButtonDisabled(!(isEmailValid && isPasswordValid && isNameValid));
    };
    enableButton();
  }, [name, email, password]);

  async function handleClick() {
    const response = await userRegister({ name, email, password });
    if (response.message) {
      setRegisterStatus({ status: 'failed', message: response.message });
    } else {
      setRegisterStatus({ status: 'success', message: '' });
      navigate('/customer/products');
    }
  }

  return (
    <MainRegister>
      <ContentRegister>
        <Form>
          <label htmlFor="name">
            Nome
            <input
              type="text"
              id="name"
              data-testid="common_register__input-name"
              name="name"
              placeholder="Meu nome"
              value={ name }
              onChange={ ({ target }) => setName(target.value) }
            />
          </label>
          <label htmlFor="email">
            Email
            <input
              type="text"
              id="email"
              data-testid="common_register__input-email"
              name="email"
              placeholder="meu@email.com"
              value={ email }
              onChange={ ({ target }) => setEmail(target.value) }
            />
          </label>
          <label htmlFor="password">
            Senha
            <input
              type="password"
              id="password"
              data-testid="common_register__input-password"
              name="password"
              placeholder="********"
              value={ password }
              onChange={ ({ target }) => setPassword(target.value) }
            />
          </label>
          <ButtonRegister
            type="button"
            data-testid="common_register__button-register"
            disabled={ isButtonDisabled }
            onClick={ () => handleClick() }
          >
            CADASTRAR
          </ButtonRegister>
        </Form>
        { registerStatus.status === 'failed' && (
          <p
            data-testid="common_register__element-invalid_register"
          >
            {registerStatus.message}
          </p>
        )}
      </ContentRegister>
    </MainRegister>
  );
}

export default Register;
