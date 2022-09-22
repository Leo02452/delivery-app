import { useState } from 'react';
import { ContentRegister, MainRegister, Form } from './styles/register.styles';

function Register() {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
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
              placeholder="Nome"
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
              placeholder="Email"
              value={ email }
              onChange={ ({ target }) => setEmail(target.value) }
            />
          </label>
        </Form>
      </ContentRegister>
    </MainRegister>
  );
}

export default Register;
