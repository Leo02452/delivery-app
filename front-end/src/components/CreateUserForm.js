import { useEffect, useState } from 'react';
import { getUser } from '../helpers/userStorage';
import createUser from '../services/users';

function CreateUserForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('seller');
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);
  const [createUserStatus, setCreateUserStatus] = useState({ status: '', message: '' });

  useEffect(() => {
    const enableButton = () => {
      const minNameCaracters = 12;
      const minPasswordCaracters = 6;
      const emailFormat = /[a-zA-Z0-9._]+@[a-zA-Z]+\.[a-zA-Z.]*\w$/;

      const isNameValid = name.length >= minNameCaracters;
      const isPasswordValid = password.length >= minPasswordCaracters;
      const isEmailValid = emailFormat.test(email);
      setIsButtonDisabled(!(isEmailValid && isPasswordValid && isNameValid));
    };
    enableButton();
  }, [email, password, name]);

  async function handleClick() {
    const { token } = getUser();
    const response = await createUser({ name, email, password, role }, token);
    if (response.message) {
      setCreateUserStatus({ status: 'failed', message: response.message });
    }
  }

  return (
    <>
      <form>
        <label htmlFor="input-name">
          Nome
          <input
            data-testid="admin_manage__input-name"
            id="input-name"
            value={ name }
            onChange={ (e) => setName(e.target.value) }
          />
        </label>
        <label htmlFor="input-email">
          Email
          <input
            data-testid="admin_manage__input-email"
            id="input-email"
            value={ email }
            onChange={ (e) => setEmail(e.target.value) }
          />
        </label>
        <label htmlFor="input-password">
          Senha
          <input
            data-testid="admin_manage__input-password"
            id="input-password"
            value={ password }
            onChange={ (e) => setPassword(e.target.value) }
          />
        </label>
        <label htmlFor="select-role">
          Tipo
          <select
            data-testid="admin_manage__select-role"
            id="select-role"
            onChange={ (e) => setRole(e.target.value) }
          >
            <option value="seller">Vendedor</option>
            <option value="customer">Cliente</option>
          </select>
        </label>
        <button
          type="button"
          data-testid="admin_manage__button-register"
          disabled={ isButtonDisabled }
          onClick={ () => handleClick() }
        >
          CADASTRAR
        </button>
      </form>
      {
        createUserStatus.status === 'failed'
        && (
          <span
            data-testid="admin_manage__element-invalid-register"
          >
            {createUserStatus.message}
          </span>
        )
      }
    </>
  );
}

export default CreateUserForm;
