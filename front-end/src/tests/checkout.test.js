import renderWithrouter from "./helps_test_/renderWithRouter";
import Checkout from "../pages/Checkout";
import { customerMock, sellerMock } from "./helps_test_/constants";
import axiosInstance from '../services/axiosInstance';
import { screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import * as router from 'react-router';

jest.mock('../services/axiosInstance');
const navigate = jest.fn();

describe('Checkout', () => {
  beforeEach(() => {
    localStorage.setItem('user', JSON.stringify(customerMock));

    const responseMock = { status: 200, data: [sellerMock] };
    axiosInstance.get.mockResolvedValueOnce(responseMock);

    const saveSaleResponseMock = { status: 201, data: 2 };
    axiosInstance.post.mockResolvedValueOnce(saveSaleResponseMock);

    jest.spyOn(router, 'useNavigate').mockImplementation(() => navigate);

    renderWithrouter(<Checkout />);
  });

  describe('Page', () => {
    it('should elements be on the page', () => {
      const finishOrderButton = screen.getByRole('button', { name: 'Finalizar Pedido' });
      expect(finishOrderButton).toBeInTheDocument();

      const columnsHeader = screen.getAllByRole('columnheader');
      expect(columnsHeader).toHaveLength(6);
      
      const sellerSelector = screen.getByRole('combobox');
      expect(sellerSelector).toBeInTheDocument();

      const sellerOption = screen.getByRole('option');
      expect(sellerOption).toBeInTheDocument();

      const addressInput = screen.getByRole('textbox');
      expect(addressInput).toBeInTheDocument();

      const addressNumberInput = screen.getByRole('spinbutton');
      expect(addressNumberInput).toBeInTheDocument();
    });

    it('should able to type delivery information', async () => {    
      const addressInput = screen.getByRole('textbox');
      userEvent.type(addressInput, 'any-address');
      
      const addressNumberInput = screen.getByRole('spinbutton');
      userEvent.type(addressNumberInput, 'any-address-number');
      
      const finishOrderButton = screen.getByRole('button', { name: 'Finalizar Pedido' });
      userEvent.click(finishOrderButton);

      await waitFor(() => expect(axiosInstance.post).toHaveBeenCalled());
      expect(navigate).toHaveBeenCalledWith('/customer/orders/2');
    });
  });
}); 