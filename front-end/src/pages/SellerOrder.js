import { useState, useEffect } from 'react';
import { getUser } from '../helpers/userStorage';
import Navbar from '../components/Navbar';
import OrderCard from '../components/OrderCard';
import instance from '../services/axiosInstance';
// import OrderContent from './styles/orders.style';

function SellerOrder() {
  const [orders, setOrders] = useState();

  useEffect(() => {
    async function getOrders() {
      const { id } = getUser();
      try {
        const response = await instance.get(`sales/search?userId=${id}`);
        setOrders(response.data);
      } catch (error) {
        setOrders(error.response.data);
      }
    }

    getOrders();
  }, []);

  return (
    <>
      <Navbar />
      {
        // Realizar o map das sales e mandar pro componente OrderCard
        orders?.map((order, index) => (
          <div key={ index }>
            <OrderCard
              order={ order }
            />
          </div>
        ))
      }
    </>
  );
}

export default SellerOrder;
