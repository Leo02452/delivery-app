import React from 'react';
import { useSelector } from 'react-redux';
import ButtonCart from './buttonCart';
import CheckoutTable from './CheckoutTable';

function CheckoutProducts() {
  const products = useSelector((state) => state.cartProducts);
  console.log(products);

  return (
    <div className="all_requests">
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
            id={ index }
            describe={ prd.name }
            quantity={ prd.quantity }
            unitValue={ prd.price }
          />
        ))}
      </table>
      <ButtonCart />
    </div>
  );
}

export default CheckoutProducts;
