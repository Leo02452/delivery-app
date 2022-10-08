import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import instance from '../services/axiosInstance';
import OrderTable from '../components/OrderTable';
import Navbar from '../components/Navbar';
import { OrderDetailsContent } from './styles/orderDetails.styles';
import { Table } from '../components/styles/checkoutProducts.styles';
import Switcher from '../components/Switcher';
import OrderInfo from '../components/OrderInfo';
import { updateSaleStatus } from '../services/sale';
import { getUser } from '../helpers/userStorage';

function OrderDetails() {
  const { id } = useParams();
  const [sale, setSale] = useState();
  const [enableButton, setEnableButton] = useState(true);

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

  async function handleClick() {
    setSale({ ...sale, status: 'Entregue' });

    const user = getUser();

    await updateSaleStatus(id, { status: 'Entregue' }, user.token);
  }

  useEffect(() => {
    const isButtonDisabled = () => {
      if (sale?.status === 'Em Trânsito') {
        return setEnableButton(false);
      }
      return setEnableButton(true);
    };
    isButtonDisabled();
  }, [sale?.status]);

  return (
    <>
      <Switcher />
      <Navbar />
      <OrderDetailsContent>
        <h1>Detalhe do Pedido</h1>
        <OrderInfo sale={ sale } />
        <button
          type="button"
          disabled={ enableButton }
          onClick={ () => handleClick() }
          data-testid="customer_order_details__button-delivery-check"
        >
          Marcar como entregue
        </button>
        <Table>
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
        </Table>
        <span
          data-testid="customer_order_details__element-order-total-price"
        >
          { sale?.totalPrice.replace('.', ',') }
        </span>
      </OrderDetailsContent>
    </>
  );
}

export default OrderDetails;
