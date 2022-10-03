import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import moment from 'moment';
import Navbar from '../components/Navbar';
import instance from '../services/axiosInstance';
import OrderTable from '../components/OrderTable';

function SellerOrderDetails() {
  const { id } = useParams();
  const [sale, setSale] = useState();

  useEffect(() => {
    async function getSale() {
      try {
        const response = await instance.get(`sales/${id}`);
        setSale(response.data);
      } catch (error) {
        setSale(error.response.data);
      }
    }
    getSale();
  }, [id]);

  return (
    <div>
      <Navbar />
      <h1>Detalhe do Pedido</h1>
      <p
        data-testid="seller_order_details__element-order-details-label-order-id"
      >
        { sale?.id }
      </p>
      <p
        data-testid="seller_order_details__element-order-details-label-order-date"
      >
        { moment(sale?.seller.saleDate).format('DD/MM/YYYY') }
      </p>
      <p
        data-testid="seller_order_details__element-order-details-label-delivery-status"
      >
        { sale?.status }
      </p>
      <button
        type="button"
        onClick={ () => handleClick() }
        data-testid="seller_order_details__button-preparing-check"
      >
        Preparar pedido
      </button>
      <button
        type="button"
        onClick={ () => handleClick() }
        data-testid="seller_order_details__button-dispatch-check"
      >
        Saiu para entrega
      </button>
      <div>
        <table>
          <tr>
            <th>Item</th>
            <th>Descrição</th>
            <th>Quantidade</th>
            <th>Valor Unitário</th>
            <th>Sub-total</th>
          </tr>
          { sale?.products.map((prd, index) => (
            <OrderTable
              key={ index }
              index={ index }
              describe={ prd.name }
              quantity={ prd.SalesProduct.quantity }
              unitValue={ prd.price }
            />
          ))}
        </table>
        {' '}
      </div>
      <span
        data-testid="seller_order_details__element-order-total-price"
      >
        { sale?.totalPrice.replace('.', ',') }
      </span>
    </div>
  );
}

export default SellerOrderDetails;
