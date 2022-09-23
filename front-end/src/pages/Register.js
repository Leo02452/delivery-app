import { useState, useEffect } from 'react';
import { ContentRegister, MainRegister, Form,
  ButtonRegister } from './styles/register.styles';

function Register() {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
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
  return (
    <MainRegister>
      <ContentRegister>
        <Form>
          <span>Nome</span>
          <label htmlFor="name">
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
          <span>Email</span>
          <label htmlFor="email">
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
          <span>Senha</span>
          <label htmlFor="password">
            <input
              type="text"
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
            onClick={ () => console.log('click') }
          >
            CADASTRAR
          </ButtonRegister>
        </Form>
        {/* { */}
        {/* loginStatus.status === 'failed' && ( */}
        <p
          data-testid="common_login__element-invalid-email"
        >
          {/* {loginStatus.message} */}
        </p>
        Deu ruim
        {/* ) */}
        {/* } */}
      </ContentRegister>
    </MainRegister>
  );
}

export default Register;
