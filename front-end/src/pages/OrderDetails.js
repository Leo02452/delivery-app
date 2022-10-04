import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import moment from 'moment';
import instance from '../services/axiosInstance';
import OrderTable from '../components/OrderTable';
import Navbar from '../components/Navbar';
import { OrderDetailsContent, Details, PStatus } from './styles/orderDetails.styles';
import { Table } from '../components/styles/checkoutProducts.styles';
import Switcher from '../components/Switcher';

function OrderDetails() {
  const { id } = useParams();
  const [sale, setSale] = useState();
  const [enableButton, setEnableButton] = useState(true);
  console.log('sale', sale);

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
    // Em construção
    // Função responsável por alterar o estado da venda para entregue (rascunho)
    console.log('Finge que ta mudando o estado');
  }

  useEffect(() => {
    const isButtonDisabled = () => {
      if (sale?.status === 'Entregue') {
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
        <Details>
          <p
            data-testid="customer_order_details__element-order-details-label-order-id"
          >
            { sale?.id }
          </p>
          <p
            data-testid="customer_order_details__element-order-details-label-seller-name"
          >
            { sale?.seller.name }
          </p>
          <p
            data-testid="customer_order_details__element-order-details-label-order-date"
          >
            { moment(sale?.seller.saleDate).format('DD/MM/YYYY') }
          </p>
          <PStatus
            data-testid="customer_order_details__
            element-order-details-label-delivery-status"
          >
            { sale?.status }
          </PStatus>
          <button
            type="button"
            disabled={ enableButton }
            onClick={ () => handleClick() }
            data-testid="customer_order_details__button-delivery-check"
          >
            Marcar como entregue
          </button>
        </Details>
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
