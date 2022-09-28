import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

function ButtonCart() {
  const navigate = useNavigate();
  const [enableButton, setEnableButton] = useState(true);
  const totalPrice = useSelector((state) => state.totalPrice);

  useEffect(() => {
    const isButtonDisabled = () => {
      if (totalPrice > 0) {
        return setEnableButton(false);
      }
      return setEnableButton(true);
    };
    isButtonDisabled();
  }, [totalPrice]);

  return (
    <div
      className="buttonCart"
      data-testid="customer_products__checkout-bottom-value"
    >
      <button
        type="button"
        data-testid="customer_products__button-cart"
        disabled={ enableButton }
        onClick={ () => navigate('/customer/checkout') }
      >
        { totalPrice.toString().replace('.', ',') }
      </button>
    </div>
  );
}
export default ButtonCart;
