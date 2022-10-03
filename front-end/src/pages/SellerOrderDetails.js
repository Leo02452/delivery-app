import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import moment from 'moment';
import Navbar from '../components/Navbar';
import instance from '../services/axiosInstance';
import OrderTable from '../components/OrderTable';
import { getUser } from '../helpers/userStorage';

function SellerOrderDetails() {
  const { id } = useParams();
  const [sale, setSale] = useState();
  const [saleStatus, setSaleStatus] = useState();

  useEffect(() => {
    async function getSale() {
      try {
        const response = await instance.get(`sales/${id}`);
        setSale(response.data);
        setSaleStatus(response.data.status);
      } catch (error) {
        setSale(error.response.data);
      }
    }
    getSale();
  }, []);

  // pensar em como usar o retorno da função
  useEffect(() => {
    const user = getUser();
    async function updateSaleStatus() {
      try {
        const response = await axiosInstance.patch(
          `sales/${id}`,
          { status: saleStatus },
          { headers: { Authorization: user.token } },
        );
        return response.data;
      } catch (error) {
        return error.response.data;
      }
    }

    updateSaleStatus();
  }, [saleStatus]);

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
        { saleStatus }
      </p>
      <button
        type="button"
        onClick={ () => setSaleStatus('Preparando') }
        disabled={ saleStatus !== 'Pendente' }
        data-testid="seller_order_details__button-preparing-check"
      >
        Preparar pedido
      </button>
      <button
        type="button"
        onClick={ () => setSaleStatus('Em trânsito') }
        disabled={ saleStatus !== 'Preparando' }
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
