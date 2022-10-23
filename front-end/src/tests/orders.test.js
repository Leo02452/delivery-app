import Orders from "../pages/Orders";
import renderWithrouter from "./helps_test_/renderWithRouter";
import axiosInstance from '../services/axiosInstance';
import { salesByUser } from "./helps_test_/salesMock";
import { screen, waitFor } from "@testing-library/react";
import { customerMock } from "./helps_test_/constants";

jest.mock('../services/axiosInstance');

describe('Orders', () => {
  describe('Page', () => {
    beforeEach(() => {
      const responseMock = { status: 200, data: salesByUser }
      axiosInstance.get.mockResolvedValueOnce(responseMock);

      localStorage.setItem('user', JSON.stringify(customerMock));

      renderWithrouter(<Orders />);
    });

    afterEach(jest.clearAllMocks);
    it('should elements be on the page', async () => {
      await waitFor(() => expect(axiosInstance.get).toHaveBeenCalled());

      const statusButton = screen.getByRole('button', { name: 'Pendente' });
      expect(statusButton).toBeInTheDocument();

      const orderDetailsLink = screen.getByRole('link', { name: `1 Pendente 14/10/2022 15,00` });
      expect(orderDetailsLink).toBeInTheDocument();
    });
  });
}); 