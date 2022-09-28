import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { CheckDetailsMain, Button } from './styles/checkoutDetails.styled';
import saveSale from '../services/sale';
import axiosInstances from '../services/axiosInstance';

function CheckoutDetails() {
  const [sellers, setSellers] = useState();
  const [deliveryAddress, setDeliveryAddress] = useState();
  const [deliveryNumber, setDeliveryNumber] = useState();
  const [sellerName, setSellerName] = useState();

  const products = useSelector((state) => state.cartProducts);
  const totalPrice = useSelector((state) => state.totalPrice);

  const navigate = useNavigate();

  useEffect(() => {
    async function getAllSellers() {
      try {
        const response = await axiosInstances.get('users/search?r=seller');
        console.log(response);
        setSellers(response.data);
      } catch (error) {
        setSellers(error.response.data);
      }
    }
    getAllSellers();
  }, []);

  async function handleClick() {
    // montar o body
    const body = {
      sellerId: sellers.reduce((acc, seller) => {
        if (seller.name === sellerName) {
          return seller.id;
        }
        return acc;
      }, 0),
      totalPrice,
      deliveryAddress,
      deliveryNumber,
      products: products.map(({ id, quantity }) => ({ id, quantity })),
    };
    // fazer a requisição e receber o id
    const id = await saveSale(body);

    // navegar até a pagina de detalhes
    navigate(`/customer/orders/${id}`);
  }

  return (
    <CheckDetailsMain>
      <label htmlFor="seller">
        Vendedor Responsavel
        <select
          data-testid="customer_checkout__select-seller"
          name="seller"
          onChange={ (e) => setSellerName(e.target.value) }
          value={ sellerName }
        >
          {sellers?.map(({ name }, index) => (
            <option
              key={ index }
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
    </CheckDetailsMain>
  );
}

export default CheckoutDetails;
