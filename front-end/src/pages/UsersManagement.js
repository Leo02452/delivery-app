import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import CreateUserForm from '../components/CreateUserForm';
import UsersTable from '../components/UsersTable';
import { asyncFetchUsers } from '../redux/reduces/userReduce';

function UsersManagement() {
  const dispatch = useDispatch();

  const users = useSelector((state) => state.users.users);

  useEffect(() => {
    dispatch(asyncFetchUsers());
  }, []);

  return (
    <>
      <CreateUserForm />
      <UsersTable users={ users } />
    </>
  );
}

export default UsersManagement;
