import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useLocation } from 'react-router-dom';

function OrderTable({
  index,
  describe,
  quantity,
  unitValue,
}) {
  const { pathname } = useLocation();
  const role = pathname.split('/')[0];
  const [subTotal, setSubTotal] = useState(0);
  useEffect(() => {
    const subTotalMath = () => {
      const total = (Number(unitValue) * quantity).toFixed(2);
      setSubTotal(total);
    };
    subTotalMath();
  });
  return (
    <div>
      <tr>
        <td
          data-testid={
            `${role}_order_details__element-order-table-item-number-${index}`
          }
        >
          { index + 1 }

        </td>
        <td
          data-testid={ `${role}_order_details__element-order-table-name-${index}` }
        >
          {describe}

        </td>
        <td
          data-testid={ `${role}_order_details__element-order-table-quantity-${index}` }
        >
          {quantity}

        </td>
        <td
          data-testid={
            `${role}_order_details__element-order-table-unit-price-${index}`
          }
        >
          { unitValue.replace('.', ',') }

        </td>
        <td
          data-testid={ `${role}_order_details__element-order-table-sub-total-${index}` }
        >
          {subTotal.toString().replace('.', ',') }

        </td>
      </tr>
    </div>
  );
}

OrderTable.propTypes = {
  index: PropTypes.node.isRequired,
  describe: PropTypes.node.isRequired,
  quantity: PropTypes.node.isRequired,
  unitValue: PropTypes.node.isRequired,
};

export default OrderTable;
