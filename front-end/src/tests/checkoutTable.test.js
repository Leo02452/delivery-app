import { screen } from "@testing-library/react";
import CheckoutTable from "../components/CheckoutTable";
import renderWithrouter from "./helps_test_/renderWithRouter";

const prd = {
  id: 1,
  name: 'any-name',
  quantity: 2,
  price: '70.00'
}

describe('Checkout table', () => {
  describe('Page', () => {
    it('should elements be on the page', () => {
      renderWithrouter(<CheckoutTable
        key={ 1 }
        id={ prd.id }
        index={ 1 }
        describe={ prd.name }
        quantity={ prd.quantity }
        unitValue={ prd.price }
      />);

      const cells = screen.getAllByRole('cell');
      expect(cells).toHaveLength(6); 
    });
  });
}); 