import { createSlice } from '@reduxjs/toolkit';
import roleTranslate from '../../helpers/roleTranslate';
import instance from '../../services/axiosInstance';

const initialState = {
  users: [],
};

const usersReduce = createSlice({
  name: 'users',
  initialState,
  reducers: {
    updateUsers: (state, action) => {
      state.users = [...action.payload];
    },
  },
});

export const { updateUsers } = usersReduce.actions;

export default usersReduce.reducer;

export function asyncFetchUsers() {
  return async function (dispatch) {
    try {
      const { data } = await instance.get('users/search');
      const notAdmUsers = data
        .map(roleTranslate)
        .filter((user) => user.role !== 'administrator');
      dispatch(updateUsers(notAdmUsers));
    } catch (error) {
      dispatch(updateUsers(error.response.data));
    }
  };
}
