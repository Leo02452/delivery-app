import { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import OrderCard from '../components/OrderCard';
import instance from '../services/axiosInstance';
import { getUser } from '../helpers/userStorage';
import { OrderMain, OrderContent } from './styles/orders.style';
import Switcher from '../components/Switcher';

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
      <Switcher />
      <Navbar />
      <OrderMain>
        {
          // Realizar o map das sales e mandar pro componente OrderCard
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
