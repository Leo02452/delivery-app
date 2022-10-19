import React from 'react';
import { useSelector } from 'react-redux';
import CheckoutTable from './CheckoutTable';
import { CheckProdMain, CheckProdContent, Table } from './styles/checkoutProducts.styles';

function CheckoutProducts() {
  const products = useSelector((state) => state.cart.cartProducts);
  const totalPrice = useSelector((state) => state.cart.totalPrice);

  return (
    <CheckProdMain className="all_requests">
      <CheckProdContent>
        <header>Finalizar Pedido</header>
        <Table>
          <tr>
            <th>Item</th>
            <th>Descrição</th>
            <th>Quantidade</th>
            <th>Valor Unitário</th>
            <th>Sub-total</th>
            <th>Remover Item</th>
          </tr>
          { products.map((prd, index) => (
            <CheckoutTable
              key={ index }
              id={ prd.id }
              index={ index }
              describe={ prd.name }
              quantity={ prd.quantity }
              unitValue={ prd.price }
            />
          ))}
        </Table>
        <span
          data-testid="customer_checkout__element-order-total-price"
        >
          { totalPrice.toFixed(2).replace('.', ',') }
        </span>
      </CheckProdContent>
    </CheckProdMain>
  );
}

export default CheckoutProducts;
