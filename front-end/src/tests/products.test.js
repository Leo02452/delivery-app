import React from "react";
import { screen, waitFor } from "@testing-library/react";
import Products from "../pages/Products";
import axiosInstance from '../services/axiosInstance';
import { customerMock, productsMock } from "./helps_test_/constants";
import renderWithrouter from "./helps_test_/renderWithRouter";

jest.mock('../services/axiosInstance');

describe('Products', () => {
  describe('Page', () => {
    it('should elements be on the page', async () => {
      const responseMock = { status: 200, data: productsMock }
      axiosInstance.get.mockResolvedValueOnce(responseMock);
      localStorage.setItem('user', JSON.stringify(customerMock));

      renderWithrouter(<Products />);

      expect(axiosInstance.get).toHaveBeenCalledWith('customer/products');

      await waitFor(() => expect(axiosInstance.get).toHaveBeenCalled());

      const allProductsSelectedQuantity = screen.getAllByRole('spinbutton');
      expect(allProductsSelectedQuantity).toHaveLength(productsMock.length);
    });
    //
  }); 
}); 