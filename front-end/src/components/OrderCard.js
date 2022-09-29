// import PropTypes from 'prop-types';

function OrderCard() {
  return (
    <div>
      <p data-testid="customer_orders__element-order-id-<id>">
        Aqui vai o numero do pedido
      </p>
      <p data-testid="customer_orders__element-delivery-status-<id>">
        Aqui vai o status da entrega
      </p>
      <p data-testid="customer_orders__element-order-date-<id>">
        Aqui vai a data do pedido
      </p>
      <p data-testid="customer_orders__element-card-price-<id>">
        Aqui vai o valor total do pedido
      </p>
    </div>
  );
}

export default OrderCard;

// - 34: customer_orders__element-delivery-status-<id>
// - 35: customer_orders__element-order-date-<id>
// - 36: customer_orders__element-card-price-<id></id>
