import React from 'react';
import { screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import * as router from 'react-router';
import renderWithRouter from './helps_test_/renderWithRouter';
import Login from '../pages/Login';
import { administratorMock, customerMock, sellerMock, VALID_EMAIL, VALID_PASSWORD } from './helps_test_/constants';
import axiosInstance from '../services/axiosInstance';

jest.mock('../services/axiosInstance');
const navigate = jest.fn();

describe('Login', () => {
  afterEach(jest.clearAllMocks);

  describe('Page', () => {
    it('should elements be on the page', () => {
      renderWithRouter(<Login />);

      const title1 = screen.getByRole('heading', { name: 'Calango' });
      expect(title1).toBeInTheDocument();
      const title2 = screen.getByRole('heading', { name: 'Delivery' });
      expect(title2).toBeInTheDocument();
      const subtitle = screen.getByRole('heading', { name: 'SEU APP DE ENTREGAS' });
      expect(subtitle).toBeInTheDocument();
    });
    
    it('should register button redirect to register form', () => {
      jest.spyOn(router, 'useNavigate').mockImplementation(() => navigate);

      renderWithRouter(<Login />);

      const registerButton = screen.getByRole('button', { name: 'Ainda não tenho conta' });
      userEvent.click(registerButton);

      expect(navigate).toHaveBeenCalledWith('/register');
    });
  });
  describe('API request error', () => {
    it('should show a error message if API returns an error', async () => {
      const ErrorResponseMock = { response: { status: 400, data: { message: 'any-error' } } };
      axiosInstance.post.mockRejectedValueOnce(ErrorResponseMock);
      
      renderWithRouter(<Login />);

      const emailInput = screen.getByRole('textbox', { name: 'Email' });
      userEvent.type(emailInput, VALID_EMAIL);
      
      const passwordInput = screen.getByText('Password');
      userEvent.type(passwordInput, VALID_PASSWORD);

      const loginButton = screen.getByRole('button', { name: 'LOGIN' });
      userEvent.click(loginButton);
      
      await waitFor(() => expect(axiosInstance.post).toHaveBeenCalled());
      
      expect(screen.getByTestId('common_login__element-invalid-email')).toBeInTheDocument();
    });
  });  

  describe('on success', () => {
    beforeEach(() => jest.spyOn(router, 'useNavigate').mockImplementation(() => navigate));

    it('should navigate to customer homepage', async () => {
      const responseMock = { status: 200, data: customerMock };
      axiosInstance.post.mockResolvedValueOnce(responseMock);
      
      renderWithRouter(<Login />);

      const emailInput = screen.getByRole('textbox', { name: 'Email' });
      userEvent.type(emailInput, VALID_EMAIL);
      
      const passwordInput = screen.getByText('Password');
      userEvent.type(passwordInput, VALID_PASSWORD);
      
      const loginButton = screen.getByRole('button', { name: 'LOGIN' });
      userEvent.click(loginButton);

      await waitFor(() => expect(axiosInstance.post).toHaveBeenCalled());

      expect(navigate).toHaveBeenCalledWith('/customer/products');
    });
    
    it('should navigate to customer homepage', async () => {
      const responseMock = { status: 200, data: sellerMock };
      axiosInstance.post.mockResolvedValueOnce(responseMock);
      
      renderWithRouter(<Login />);

      const emailInput = screen.getByRole('textbox', { name: 'Email' });
      userEvent.type(emailInput, VALID_EMAIL);
      
      const passwordInput = screen.getByText('Password');
      userEvent.type(passwordInput, VALID_PASSWORD);
      
      const loginButton = screen.getByRole('button', { name: 'LOGIN' });
      userEvent.click(loginButton);

      await waitFor(() => expect(axiosInstance.post).toHaveBeenCalled());

      expect(navigate).toHaveBeenCalledWith('/seller/orders');
    });

    it('should navigate to customer homepage', async () => {
      const responseMock = { status: 200, data: administratorMock };
      axiosInstance.post.mockResolvedValueOnce(responseMock);
      
      renderWithRouter(<Login />);

      const emailInput = screen.getByRole('textbox', { name: 'Email' });
      userEvent.type(emailInput, VALID_EMAIL);
      
      const passwordInput = screen.getByText('Password');
      userEvent.type(passwordInput, VALID_PASSWORD);
      
      const loginButton = screen.getByRole('button', { name: 'LOGIN' });
      userEvent.click(loginButton);

      await waitFor(() => expect(axiosInstance.post).toHaveBeenCalled());

      expect(navigate).toHaveBeenCalledWith('/admin/manage');
    });
  });  
});
