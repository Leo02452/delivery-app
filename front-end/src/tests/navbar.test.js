import React from "react";
import { screen } from "@testing-library/react";
import { customerMock } from "./helps_test_/constants";
import * as router from 'react-router';
import renderWithrouter from "./helps_test_/renderWithRouter";
import Navbar from "../components/Navbar";
import userEvent from "@testing-library/user-event";

const navigate = jest.fn();
const LINK_OPTIONS = {
  "preventScrollReset": undefined,
  "relative": undefined,
  "replace": false,
  "state": undefined
}

describe('Navbar', () => {
  describe('Page', () => {
    beforeEach(() => localStorage.setItem('user', JSON.stringify(customerMock)));

    it('should elements be on the page', async () => {
      renderWithrouter(<Navbar />);

      const productsLink = screen.getByRole('link', { name: 'PRODUTOS' });
      expect(productsLink).toBeInTheDocument();
 
      const myOrdersLink = screen.getByRole('link', { name: 'MEUS PEDIDOS' });
      expect(myOrdersLink).toBeInTheDocument();

      const logoutButton = screen.getByRole('button', { name: 'Sair' });
      expect(logoutButton).toBeInTheDocument();

      const userNameHeading = screen.getByRole('heading', { level: 3 });
      expect(userNameHeading).toBeInTheDocument();
    });
    
    it('should elements redirect user to another page', async () => {
      jest.spyOn(router, 'useNavigate').mockImplementation(() => navigate)
      
      renderWithrouter(<Navbar />);

      const productsLink = screen.getByRole('link', { name: 'PRODUTOS' });
      userEvent.click(productsLink);

      expect(navigate).toHaveBeenCalledWith('/customer/products', LINK_OPTIONS);
      
      const myOrdersLink = screen.getByRole('link', { name: 'MEUS PEDIDOS' });
      userEvent.click(myOrdersLink);
      
      expect(navigate).toHaveBeenCalledWith('/customer/orders', LINK_OPTIONS);
      
      const logoutButton = screen.getByRole('button', { name: 'Sair' });
      userEvent.click(logoutButton);
      
      expect(navigate).toHaveBeenCalledWith('/login');
    });
  });
}); 