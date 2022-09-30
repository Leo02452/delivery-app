import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import instance from '../services/axiosInstance';
import OrderTable from '../components/OrderTable';

function OrderDetails() {
  const { id } = useParams();
  const [sale, setSale] = useState();
  const [enableButton, setEnableButton] = useState(true);

  useEffect(() => {
    async function getSale() {
      try {
        const response = await instance.get(`sales/${id}`);
        // console.log('response', response);
        // const { products } = sale;
        console.log('response data', response.data?.products);
        setSale(response.data);
      } catch (error) {
        setSale(error.response.data);
      }
    }
    getSale();
  }, [id]);
  // console.log('sale:', sale);

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
      <h1>Detalhe do Pedido</h1>
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
        { sale?.saleDate }
      </p>
      <p
        data-testid="customer_order_details__element-order-details-label-delivery-status"
      >
        { sale?.status }
      </p>
      <button
        type="button"
        disabled={ enableButton }
        onClick={ () => handleClick() }
        data-testid="customer_order_details__button-delivery-check"
      >
        Marcar como entregue
      </button>
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
      <span
        data-testid="customer_order_details__element-order-total-price"
      >
        { sale?.totalPrice }
      </span>
    </>
  );
}

export default OrderDetails;
