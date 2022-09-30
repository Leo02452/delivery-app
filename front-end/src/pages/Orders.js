import Navbar from '../components/Navbar';
import OrderCard from '../components/OrderCard';
import { OrderMain, OrderContent } from './styles/orders.style';

function Orders() {
// Pegar o usuário no localStorage
// Fazer requisição no backend pra pegar todas as sales do usuário logado
// Realizar o map das sales e mandar pro componente OrderCard

  // Exemplo de um array de orders
  const orders = [
    { id: 1,
      status: 'Pendente',
      saleDate: '29/09/22',
      totalPrice: '34,54',
    },
    { id: 2,
      status: 'Entregue',
      saleDate: '18/05/22',
      totalPrice: '154,88',
    },
  ];
  return (
    <>
      <Navbar />
      <OrderMain>
        {
          orders?.map((order, index) => (
            <OrderContent key={ index }>
              <OrderCard
                order={ order }
              />
            </OrderContent>
          ))
        }
      </OrderMain>
    </>
  );
}

export default Orders;
