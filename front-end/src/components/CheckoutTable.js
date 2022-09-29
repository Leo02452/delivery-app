import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { FaTimes } from 'react-icons/fa';
import { removeFromCart } from '../redux/reduces/cartReduce';

function CheckoutTable({
  index,
  id,
  describe,
  quantity,
  unitValue,
}) {
  const dispatch = useDispatch();
  const [subTotal, setSubTotal] = useState(0);
  // const itemListId = index + 1;
  // console.log(
  //   id,
  //   describe,
  //   quantity,
  //   unitValue);
  useEffect(() => {
    const subTotalMath = () => {
      const total = (parseFloat(unitValue) * quantity).toFixed(2);
      setSubTotal(total);
    };
    subTotalMath();
  });

  return (
    <tr>
      <td
        data-testid={ `customer_checkout__element-order-table-item-number-${index}` }
      >
        { index + 1 }

      </td>
      <td
        data-testid={ `customer_checkout__element-order-table-name-${index}` }
      >
        {describe}

      </td>
      <td
        data-testid={ `customer_checkout__element-order-table-quantity-${index}` }
      >
        {quantity}

      </td>
      <td
        data-testid={ `customer_checkout__element-order-table-unit-price-${index}` }
      >
        { unitValue.replace('.', ',') }

      </td>
      <td
        data-testid={ `customer_checkout__element-order-table-sub-total-${index}` }
      >
        {subTotal.toString().replace('.', ',') }

      </td>
      <td
        data-testid={ `customer_checkout__element-order-table-remove-${index}` }
      >
        <button
          type="submit"
          onClick={ () => dispatch(removeFromCart({ id })) }
        >
          <FaTimes />
        </button>
      </td>
    </tr>
  );
}

CheckoutTable.propTypes = {
  index: PropTypes.node.isRequired,
  id: PropTypes.node.isRequired,
  describe: PropTypes.node.isRequired,
  quantity: PropTypes.node.isRequired,
  unitValue: PropTypes.node.isRequired,
};

export default CheckoutTable;
