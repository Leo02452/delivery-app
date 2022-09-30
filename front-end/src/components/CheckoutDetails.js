import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { CheckDetailsMain, Button } from './styles/checkoutDetails.styled';
import saveSale from '../services/sale';
import { getUser } from '../helpers/userStorage';
import axiosInstances from '../services/axiosInstance';

function CheckoutDetails() {
  const [sellers, setSellers] = useState();
  const [deliveryAddress, setDeliveryAddress] = useState();
  const [deliveryNumber, setDeliveryNumber] = useState();
  const [sellerId, setSellerId] = useState();
  const [token, setToken] = useState();
  const [stateMessage, setStateMessage] = useState({ status: '', message: '' });

  const products = useSelector((state) => state.cartProducts);
  const totalPrice = useSelector((state) => state.totalPrice);

  const navigate = useNavigate();

  useEffect(() => {
    async function getAllSellers() {
      try {
        const response = await axiosInstances.get('users/search?r=seller');
        setSellers(response.data);
        setSellerId(response.data[0].id);
      } catch (error) {
        setSellers(error.response.data);
      }
    }
    getAllSellers();

    const user = getUser();
    setToken(user.token);
  }, []);

  async function handleClick() {
    const body = {
      sellerId: Number(sellerId),
      totalPrice,
      deliveryAddress,
      deliveryNumber,
      products: products.map(({ id, quantity }) => ({ id, quantity })),
    };

    const response = await saveSale(body, token);

    if (response.message) {
      setStateMessage({ status: 'failed', message: response.message });
    } else {
      setStateMessage({ status: 'success', message: '' });
      navigate(`/customer/orders/${response.data}`);
    }
  }

  return (
    <CheckDetailsMain>
      <label htmlFor="seller">
        Vendedor Responsavel
        <select
          data-testid="customer_checkout__select-seller"
          onChange={ (e) => setSellerId(e.target.value) }
        >
          {sellers?.map(({ id, name }, index) => (
            <option
              key={ index }
              value={ id }
              name="seller"
            >
              {name}
            </option>
          ))}
        </select>
        <br />
      </label>
      <labe htmlFor="address">
        Endereço
        <input
          data-testid="customer_checkout__input-address"
          type="text"
          name="address"
          value={ deliveryAddress }
          placeholder="Rua dos Alfineiros, bairro Little Whinging"
          onChange={ (e) => setDeliveryAddress(e.target.value) }
        />
      </labe>
      <labe htmlFor="addressNumber">
        Número
        <input
          data-testid="customer_checkout__input-address-number"
          type="number"
          name="addressNumber"
          placeholder="4"
          min="0"
          value={ deliveryNumber }
          onChange={ (e) => setDeliveryNumber(e.target.value) }
        />
      </labe>
      <Button
        data-testid="customer_checkout__button-submit-order"
        type="button"
        onClick={ () => handleClick() }
      >
        Finalizar Pedido
      </Button>
      {
        stateMessage.status === 'failed'
        && <p>{ stateMessage.message }</p>
      }
    </CheckDetailsMain>
  );
}

export default CheckoutDetails;
