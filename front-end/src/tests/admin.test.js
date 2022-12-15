import { screen, waitFor } from "@testing-library/react";
import UsersManagement from "../pages/UsersManagement";
import { administratorMock, createdSeller, VALID_EMAIL, VALID_NAME, VALID_PASSWORD } from "./helps_test_/constants";
import renderWithrouter from "./helps_test_/renderWithRouter";
import usersMock from "./helps_test_/userMock";
import axiosInstance from '../services/axiosInstance';
import userEvent from "@testing-library/user-event";

jest.mock('../services/axiosInstance');



describe('Admin', () => {
  afterEach(jest.clearAllMocks);

  describe('Create user', () => {
    beforeEach(() => {
      localStorage.setItem('user', JSON.stringify(administratorMock))
      const firstListUsersResponseMock = { status: 200, data: usersMock };
      axiosInstance.get.mockResolvedValueOnce(firstListUsersResponseMock);
    });

    it('should be able to register a new user', async () => {
      const secondListUsersResponseMock = { status: 200, data: [...usersMock, createdSeller]}
      const registerUserResponseMock = { status: 201, data: createdSeller };

      axiosInstance.get.mockResolvedValueOnce(secondListUsersResponseMock);
      axiosInstance.post.mockResolvedValueOnce(registerUserResponseMock);

      renderWithrouter(<UsersManagement />);

      await waitFor(() => expect(axiosInstance.get).toHaveBeenCalled());

      const rows = screen.getAllByRole('row');
      expect(rows).toHaveLength(5);
  
      const nameInput = screen.getByRole('textbox', { name: 'Nome' });
      userEvent.type(nameInput, VALID_NAME);

      const emailInput = screen.getByRole('textbox', { name: 'Email' });
      userEvent.type(emailInput, VALID_EMAIL);

      const passwordInput = screen.getByRole('textbox', { name: 'Senha' });
      userEvent.type(passwordInput, VALID_PASSWORD);

      const sellerOption = screen.getByRole('option', { name: 'Vendedor' });

      const customerOption = screen.getByRole('option', { name: 'Cliente' });

      const registerButton = screen.getByRole('button', { name: 'CADASTRAR' });
      userEvent.click(registerButton);

      await waitFor(() => expect(axiosInstance.post).toHaveBeenCalledWith(
        'users',
        { name: VALID_NAME, email: VALID_EMAIL, password: VALID_PASSWORD, role: 'seller' },
        { headers: { authorization: 'any-token' } },
      ));

      expect(screen.getAllByRole('row')).toHaveLength(6);
    });

    it('should be able to delete a user', async () => {
      const secondListUsersResponseMock = { status: 200, data: usersMock.slice(2)}
      const deleteUserResponseMock = { status: 204 };

      axiosInstance.get.mockResolvedValueOnce(secondListUsersResponseMock);
      axiosInstance.delete.mockResolvedValueOnce(deleteUserResponseMock);

      renderWithrouter(<UsersManagement />);

      await waitFor(() => expect(axiosInstance.get).toHaveBeenCalled());

      const rows = screen.getAllByRole('row');
      expect(rows).toHaveLength(5);
      const deleteUserButtons = screen.getAllByRole('button', { name: 'Excluir' });
      expect(deleteUserButtons).toHaveLength(4);
      
      userEvent.click(deleteUserButtons[0]);
      
      await waitFor(() => expect(axiosInstance.delete).toHaveBeenCalledWith(
        `users/${usersMock[1].id}`,
        { headers: { authorization: 'any-token' } },
        ));
        
      expect(screen.getAllByRole('row')).toHaveLength(4);
    });
  });
}); 