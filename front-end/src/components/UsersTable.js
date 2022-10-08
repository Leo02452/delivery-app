import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { getUser } from '../helpers/userStorage';
import { asyncFetchUsers } from '../redux/reduces/userReduce';
import { deleteUser } from '../services/users';

function UsersTable({ users }) {
  const dispatch = useDispatch();

  async function handleDelete(userId) {
    const user = getUser();

    await deleteUser(userId, user.token);
    dispatch(asyncFetchUsers());
  }

  return (
    <>
      <h2>Lista de usuários</h2>
      <table>
        <thead>
          <tr>
            <th>Item</th>
            <th>Nome</th>
            <th>E-mail</th>
            <th>Tipo</th>
            <th>Excluir</th>
          </tr>
        </thead>
        <tbody>
          { users?.map((user, index) => (
            <tr key={ index }>
              <td
                data-testid={ `admin_manage__element-user-table-item-number-${index}` }
              >
                { index + 1 }
              </td>
              <td
                data-testid={ `admin_manage__element-user-table-name-${index}` }
              >
                { user.name }
              </td>
              <td
                data-testid={ `admin_manage__element-user-table-email-${index}` }
              >
                { user.email }
              </td>
              <td
                data-testid={ `admin_manage__element-user-table-role-${index}` }
              >
                { user.role }
              </td>
              <td
                data-testid={ `admin_manage__element-user-table-remove-${index}` }
              >
                <button
                  type="button"
                  onClick={ () => handleDelete(user.id) }
                >
                  Excluir
                </button>
              </td>
            </tr>
          )) }
        </tbody>
      </table>
    </>
  );
}

UsersTable.propTypes = {
  users: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
      email: PropTypes.string,
      role: PropTypes.string,
    }).isRequired,
  ).isRequired,
};

export default UsersTable;
