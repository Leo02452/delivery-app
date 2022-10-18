import React from "react";
import { screen, waitFor } from "@testing-library/react";
import Products from "../pages/Products";
import axiosInstance from '../services/axiosInstance';
import { customerMock, productsMock } from "./helps_test_/constants";
import renderWithrouter from "./helps_test_/renderWithRouter";
import userEvent from "@testing-library/user-event";
import * as actionsCreators from "../redux/reduces/cartReduce";

jest.mock('../services/axiosInstance');
const MockUpdateCart = jest.fn();
const MockRemoveFromCart = jest.fn();

describe('Products', () => {
  describe('Page', () => {
    beforeEach(() => {
      const responseMock = { status: 200, data: productsMock }
      axiosInstance.get.mockResolvedValueOnce(responseMock);
      localStorage.setItem('user', JSON.stringify(customerMock));

      renderWithrouter(<Products />);
    });
    it('should elements be on the page', async () => {
      expect(axiosInstance.get).toHaveBeenCalledWith('customer/products');

      await waitFor(() => expect(axiosInstance.get).toHaveBeenCalled());

      const allProductsSelectedQuantity = screen.getAllByRole('spinbutton');
      expect(allProductsSelectedQuantity).toHaveLength(productsMock.length);
    });

    it('should buttons add and remove products from the cart', () => {
     jest.spyOn(actionsCreators, 'updateCart').mockImplementation(() => MockUpdateCart);
     jest.spyOn(actionsCreators, 'removeFromCart').mockImplementation(() => MockRemoveFromCart);

      const removeProductButtons = screen.getAllByRole('button', { name: '-' });
      userEvent.click(removeProductButtons[0]);

      expect(MockRemoveFromCart).toHaveBeenCalled();

      const addProductButtons = screen.getAllByRole('button', { name: '+' });
      userEvent.click(addProductButtons[0]);

      expect(MockUpdateCart).toHaveBeenCalled();

      userEvent.click(removeProductButtons[0]);

      expect(MockRemoveFromCart).toHaveBeenCalled();

      const allProductsSelectedQuantity = screen.getAllByRole('spinbutton');
      userEvent.type(allProductsSelectedQuantity[0], '3');

      expect(MockUpdateCart).toHaveBeenCalled();
    });
  }); 
}); 