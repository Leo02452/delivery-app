import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { ButtonMain, Button } from './styles/buttonCart.styles';

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
    <ButtonMain
      className="buttonCart"
      data-testid="customer_products__checkout-bottom-value"
    >
      <Button
        type="button"
        data-testid="customer_products__button-cart"
        disabled={ enableButton }
        onClick={ () => navigate('/customer/checkout') }
      >
        { totalPrice.toFixed(2).replace('.', ',') }
      </Button>
    </ButtonMain>
  );
}
export default ButtonCart;
