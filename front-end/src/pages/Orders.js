import Navbar from '../components/Navbar';
import OrderCard from '../components/OrderCard';
import { OrderMain } from './styles/orders.style';

function Orders() {
  return (
    <>
      <Navbar />
      <OrderMain>
        <OrderCard />
      </OrderMain>
    </>
  );
}

export default Orders;
