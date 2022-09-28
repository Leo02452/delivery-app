import React from 'react';
import { useSelector } from 'react-redux';
import CheckoutTable from './CheckoutTable';

function CheckoutProducts() {
  const products = useSelector((state) => state.cartProducts);
  const totalPrice = useSelector((state) => state.totalPrice);
  console.log(products);

  return (
    <div className="all_requests">
      <header>Finalizar Pedido</header>
      <table>
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
      </table>
      <span
        data-testid="customer_checkout__element-order-total-price"
      >
        {totalPrice.toString().replace('.', ',')}
      </span>
    </div>
  );
}

export default CheckoutProducts;
