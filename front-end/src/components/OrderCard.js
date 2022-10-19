import moment from 'moment';
import { useLocation, useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import { OrderCardContent, OrdCard, LinkStyled } from './styles/orderCard.styles';

function OrderCard({ order }) {
  const navigate = useNavigate();
  const { id, totalPrice, status, saleDate, deliveryAddress } = order;
  const { pathname } = useLocation();
  const isCustomerPage = pathname === '/customer/orders';
  const role = pathname.split('/')[0];

  return (
    <OrderCardContent>
      <LinkStyled
        to={ isCustomerPage
          ? `/customer/orders/${id}`
          : `/seller/orders/${id}` }
      >
        <OrdCard>
          <p
            data-testid={ isCustomerPage
              ? `customer_orders__element-order-id-${id}`
              : `seller_orders__element-order-id-${id}` }
          >
            { id }
          </p>
          <button
            type="button"
            onClick={ () => {
              navigate(`${role}/orders/${id}`);
            } }
            data-testid={ isCustomerPage
              ? `customer_orders__element-delivery-status-${id}`
              : `seller_orders__element-delivery-status-${id}` }
          >
            { status }
          </button>
          <p
            data-testid={ isCustomerPage
              ? `customer_orders__element-order-date-${id}`
              : `seller_orders__element-order-date-${id}` }
          >
            { moment(saleDate).format('DD/MM/YYYY') }
          </p>
          <p
            data-testid={ isCustomerPage
              ? `customer_orders__element-card-price-${id}`
              : `seller_orders__element-card-price-${id}` }
          >
            { totalPrice.replace('.', ',') }
          </p>
          {
            isCustomerPage
            && (
              <p
                data-testid={ `seller_orders__element-card-address-${id}` }
              >
                { deliveryAddress }
              </p>)
          }
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
    deliveryAddress: PropTypes.string,
  }).isRequired,
});
