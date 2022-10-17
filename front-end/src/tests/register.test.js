import { screen, waitFor } from "@testing-library/react";
import Register from "../pages/Register";
import renderWithrouter from "./helps_test_/renderWithRouter";
import axiosInstance from '../services/axiosInstance';
import userEvent from "@testing-library/user-event";
import * as router from 'react-router';
import { customerMock, VALID_EMAIL, VALID_NAME, VALID_PASSWORD } from "./helps_test_/constants";

jest.mock('../services/axiosInstance');
const navigate = jest.fn();

describe('Register', () => {
  afterEach(jest.clearAllMocks);

  describe('API request error', () => {
    it('should show a error message if API returns an error', async () => {
      const ErrorResponseMock = { response: { status: 400, data: { message: 'any-error' } } };
      axiosInstance.post.mockRejectedValueOnce(ErrorResponseMock);

      renderWithrouter(<Register />);

      const nameInput = screen.getByRole('textbox', { name: 'Nome' });
      userEvent.type(nameInput, VALID_NAME);
      
      const emailInput = screen.getByRole('textbox', { name: 'Email' });
      userEvent.type(emailInput, VALID_EMAIL);

      const passwordInput = screen.getByText('Senha');
      userEvent.type(passwordInput, VALID_PASSWORD);

      const registerButton = screen.getByRole('button', { name: 'CADASTRAR' });
      userEvent.click(registerButton);

      await waitFor(() => expect(axiosInstance.post).toHaveBeenCalled());
      
      expect(screen.getByTestId('common_register__element-invalid_register')).toBeInTheDocument();
    });
  });

  describe('API request successful', () => {
    beforeEach(() => jest.spyOn(router, 'useNavigate').mockImplementation(() => navigate));

    it('should register user, sign in and navigate to customer product', async () => {
      const responseMock = { status: 200, data: customerMock };
      axiosInstance.post.mockResolvedValueOnce(responseMock);

      renderWithrouter(<Register />);

      const nameInput = screen.getByRole('textbox', { name: 'Nome' });
      userEvent.type(nameInput, VALID_NAME);
      
      const emailInput = screen.getByRole('textbox', { name: 'Email' });
      userEvent.type(emailInput, VALID_EMAIL);

      const passwordInput = screen.getByText('Senha');
      userEvent.type(passwordInput, VALID_PASSWORD);

      const registerButton = screen.getByRole('button', { name: 'CADASTRAR' });
      userEvent.click(registerButton);

      await waitFor(() => expect(axiosInstance.post).toHaveBeenCalled());
      
      expect(navigate).toHaveBeenCalledWith('/customer/products');
    });
  });
});