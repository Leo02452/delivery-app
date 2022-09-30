import PropTypes from 'prop-types';
import { OrderCardContent, OrdCard, LinkStyled } from './styles/orderCard.styles';

function OrderCard({ order }) {
  console.log('order', order);
  const { id, totalPrice, status, saleDate } = order;
  return (
    <OrderCardContent>
      <LinkStyled to={ `/customer/orders/${id}` }>
        <OrdCard>
          <p data-testid={ `customer_orders__element-order-${id}` }>
            { id }
          </p>
          <p data-testid={ `customer_orders__element-delivery-status-${id}` }>
            { status }
          </p>
          <p data-testid={ `customer_orders__element-order-date-${id}` }>
            { saleDate }
          </p>
          <p data-testid={ `customer_orders__element-card-price-${id}` }>
            { totalPrice }
          </p>
        </OrdCard>
      </LinkStyled>
    </OrderCardContent>
  );
}

export default OrderCard;

OrderCard.propTypes = ({
  order: PropTypes.shape({
    id: PropTypes.number,
    status: PropTypes.string,
    totalPrice: PropTypes.string,
    saleDate: PropTypes.string,
  }).isRequired,
});
