import { useParams } from 'react-router-dom';
// import instance from '../services/axiosInstance';
import OrderTable from '../components/OrderTable';

function OrderDetails() {
  const { id } = useParams();
  // const [sale, setSale] = useState();

  const sale = {
    sellerId: 'zé birita',
    saleDate: '29/12/23',
    totalPrice: '238,77',
    status: 'Pendente',
    products: [
      {
        name: 'Cerveja Stella 250ml',
        quantity: 3,
        price: '3.50',
      },
      {
        name: 'Cerveja Skol Latao 450ml',
        quantity: 4,
        price: '4.10',
      },
      {
        name: 'Cerveja Stella 250ml',
        quantity: 1,
        price: '1.56',
      },
    ],
  };

  /*   useEffect(() => {
    async function getSale() {
      try {
        const response = await instance.get(`customer/sales/${id}`);
        setSale(response.data);
      } catch (error) {
        setSale(error.response.data);
      }
    }
    getSale();
  }); */

  async function handleClick() {
    // Em construção
    // Função responsável por alterar o estado da venda para entregue (rascunho)
    console.log('Finge que ta mudando o estado');
  }

  const { sellerId, saleDate, totalPrice, status, products } = sale;
  return (
    <>
      <h1>Detalhe do Pedido</h1>
      <p
        data-testid="customer_order_details__element-order-details-label-order-id"
      >
        { id }
      </p>
      <p
        data-testid="customer_order_details__element-order-details-label-seller-name"
      >
        {/* Vai o nome do vendedor */}
        { sellerId }
      </p>
      <p
        data-testid="customer_order_details__element-order-details-label-order-date"
      >
        { saleDate }
      </p>
      <p
        data-testid="customer_order_details__element-order-details-label-delivery-status"
      >
        { status }
      </p>
      <button
        type="button"
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
        { products?.map((prd, index) => (
          <OrderTable
            key={ index }
            index={ index }
            describe={ prd.name }
            quantity={ prd.quantity }
            unitValue={ prd.price }
          />
        ))}
      </table>
      <span
        data-testid="customer_order_details__element-order-total-price"
      >
        { totalPrice }
      </span>
    </>
  );
}

export default OrderDetails;
