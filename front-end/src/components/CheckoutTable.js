import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

function CheckoutTable({
  id,
  describe,
  quantity,
  unitValue,
}) {
  const [subTotal, setSubTotal] = useState(0);

  useEffect(() => {
    const subTotalMath = () => {
      const total = (Number(unitValue) * quantity).toFixed(2);
      setSubTotal(total);
    };
    subTotalMath();
  });

  return (
    <tr>
      <td
        data-testid={ `customer_checkout__element-order-table-item-number-${id}` }
      >
        {id + 1}

      </td>
      <td
        data-testid={ `customer_checkout__element-order-table-name-${id}` }
      >
        {describe}

      </td>
      <td
        data-testid={ `customer_checkout__element-order-table-quantity-${id}` }
      >
        {quantity}

      </td>
      <td
        data-testid={ `customer_checkout__element-order-table-unit-price-${id}` }
      >
        { unitValue.replace('.', ',') }

      </td>
      <td
        data-testid={ `customer_checkout__element-order-table-sub-total-${id}` }
      >
        {subTotal.toString().replace('.', ',') }

      </td>
      <td
        data-testid={ `customer_checkout__element-order-table-remove-${id}` }
      >
        <button
          type="button"
          onClick={ () => hendleDelete(id) }
        >
          Remover
        </button>
      </td>
    </tr>
  );
}

CheckoutTable.propTypes = {
  id: PropTypes.node.isRequired,
  describe: PropTypes.node.isRequired,
  quantity: PropTypes.node.isRequired,
  unitValue: PropTypes.node.isRequired,
};

export default CheckoutTable;
