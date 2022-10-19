import renderWithrouter from "./helps_test_/renderWithRouter";
import Checkout from "../pages/Checkout";
import { customerMock, sellerMock } from "./helps_test_/constants";
import axiosInstance from '../services/axiosInstance';
import { screen } from "@testing-library/react";

jest.mock('../services/axiosInstance');

describe('Checkout', () => {
  beforeEach(() => {
    localStorage.setItem('user', JSON.stringify(customerMock));

    const responseMock = { status: 200, data: [sellerMock] };
    axiosInstance.get.mockResolvedValueOnce(responseMock);

    renderWithrouter(<Checkout />);
  });
  // mockar produtos no carrinho do redux
  // mockar total do carrinho do redux

  // elementos na pagina:
  // headers table
  // produtos

  // funções:
  // salvar venda
  // redirect to details
  // remover item
  describe('Page', () => {
    it('should elements be on the page', () => {
      const finishOrderButton = screen.getByRole('button', { name: 'Finalizar Pedido' });
      const columnsHeader = screen.getAllByRole('columnheader');

      expect(columnsHeader).toHaveLength(6);
      
      const sellerSelector = screen.getByRole('combobox');
      const sellerOption = screen.getByRole('option');
      const addressInput = screen.getByRole('textbox');
      const addressNumber = screen.getByRole('spinbutton');
    });
  });
}); 