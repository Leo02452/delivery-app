import { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import OrderCard from '../components/OrderCard';
import { OrderMain } from './styles/orders.style';
import instance from '../services/axiosInstance';
import { getUser } from '../helpers/userStorage';

function Orders() {
  const [orders, setOrders] = useState();
  // Pegar o usuário no localStorage;
  const user = getUser();
  const { id } = user;
  console.log(id);

  // Fazer requisição no backend pra pegar todas as sales do usuário logado
  useEffect(() => {
    async function getOrders() {
      try {
        const response = await instance.get(`sales/search?userId=${id}`);
        setOrders(response.data);
      } catch (error) {
        setOrders(error.response.data);
      }
    }

    getOrders();
  }, [id]);
  console.log(orders);
  return (
    <>
      <Navbar />
      <OrderMain>
        {
          // Realizar o map das sales e mandar pro componente OrderCard
          orders?.map((order, index) => (
            <OrderCard
              key={ index }
              order={ order }
            />))
        }
      </OrderMain>
    </>
  );
}

export default Orders;
