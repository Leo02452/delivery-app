import renderWithrouter from "./helps_test_/renderWithRouter";
import SellerOrderDetails from '../pages/SellerOrderDetails';
import { customerMock } from "./helps_test_/constants";
import { screen, waitFor } from "@testing-library/react";
import axiosInstance from '../services/axiosInstance';
import { sellerOrderDetailMock } from './helps_test_/salesMock';
import userEvent from "@testing-library/user-event";

jest.mock('../services/axiosInstance');


describe('Seller order details', () => {
  afterEach(jest.clearAllMocks);

  describe('Page', () => {
    it('should elements be on the page', () => {
      localStorage.setItem('user', JSON.stringify(customerMock));

      const responseMock = { status: 200, data: sellerOrderDetailMock };
      axiosInstance.get.mockResolvedValueOnce(responseMock);

      renderWithrouter(<SellerOrderDetails />);

      const pageTitle = screen.getByRole('heading', { name: 'Detalhe do Pedido' });
      expect(pageTitle).toBeInTheDocument();

      const orderPrepareButton = screen.getByRole('button', { name: 'Preparar pedido' });
      expect(orderPrepareButton).toBeInTheDocument();

      const deliverOrderButton = screen.getByRole('button', { name: 'Saiu para entrega' });
      expect(deliverOrderButton).toBeInTheDocument();

      const columnsHeader = screen.getAllByRole('columnheader');

      expect(columnsHeader).toHaveLength(5);
    });

    it('should change order status buttons request the API', async () => {
      localStorage.setItem('user', JSON.stringify(customerMock));

      const responseMock = { status: 200, data: sellerOrderDetailMock };
      axiosInstance.get.mockResolvedValueOnce(responseMock);

      renderWithrouter(<SellerOrderDetails />);
      
      await waitFor(() => expect(axiosInstance.patch).toHaveBeenCalledTimes(0));

      const orderPrepareButton = screen.getByRole('button', { name: 'Preparar pedido' });
      userEvent.click(orderPrepareButton);

      await waitFor(() => expect(axiosInstance.patch).toHaveBeenCalledTimes(2));

      const deliverOrderButton = screen.getByRole('button', { name: 'Saiu para entrega' });
      userEvent.click(deliverOrderButton);

      await waitFor(() => expect(axiosInstance.patch).toHaveBeenCalledTimes(3));
    });
  });
});