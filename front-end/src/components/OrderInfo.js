import moment from 'moment';
import PropTypes from 'prop-types';
import { Details } from '../pages/styles/orderDetails.styles';

function OrderInfo({ sale }) {
  return (
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
      <p
        data-testid="customer_order_details__element-order-details-label-delivery-status"
      >
        { sale?.status }
      </p>
    </Details>
  );
}

OrderInfo.propTypes = ({
  sale: PropTypes.shape({
    id: PropTypes.number,
    status: PropTypes.string,
    seller: PropTypes.shape({
      name: PropTypes.string,
      saleDate: PropTypes.string,
    }),
  }).isRequired,
});

export default OrderInfo;
