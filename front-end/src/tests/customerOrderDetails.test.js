import { screen, waitFor } from "@testing-library/react";
import OrderDetails from "../pages/OrderDetails";
import { loggedCustomerMock } from "./helps_test_/constants";
import renderWithrouter from "./helps_test_/renderWithRouter";
import { customerOrderDetailMock } from './helps_test_/salesMock';
import axiosInstance from '../services/axiosInstance';
import userEvent from "@testing-library/user-event";

jest.mock('../services/axiosInstance');

describe('Customer order details', () => {
  describe('Page', () => {
    beforeEach(() => {
      localStorage.setItem('user', JSON.stringify(loggedCustomerMock));
  
      const responseMock = { status: 200, data: customerOrderDetailMock };
      axiosInstance.get.mockResolvedValue(responseMock);
      axiosInstance.patch.mockResolvedValue({})
    });
  
    afterEach(jest.clearAllMocks);
    it('should elements be on the page', async () => {

      renderWithrouter(<OrderDetails />);

      await waitFor(() => expect(axiosInstance.get).toHaveBeenCalled());

      const pageTitle = screen.getByRole('heading', { name: 'Detalhe do Pedido' });
      expect(pageTitle).toBeInTheDocument();

      const orderDeliverCheckButton = screen.getByRole('button', { name: 'Marcar como entregue' });
      expect(orderDeliverCheckButton).toBeInTheDocument();

      const rows = screen.getAllByRole('row');
      expect(rows).toHaveLength(3);

      const columnsHeader = screen.getAllByRole('columnheader');
      expect(columnsHeader).toHaveLength(5);
    });

    it('should be able to finish the order', async () => {
      renderWithrouter(<OrderDetails />);

      await waitFor(() => expect(axiosInstance.get).toHaveBeenCalled());

      const orderDeliverCheckButton = screen.getByRole('button', { name: 'Marcar como entregue' });
      userEvent.click(orderDeliverCheckButton);

      await waitFor(() => expect(axiosInstance.patch).toHaveBeenCalledWith(
        `sales/undefined`,
        { status: 'Entregue' },
        { headers: { Authorization: loggedCustomerMock.token } },
      ));
    });
  });
}); 