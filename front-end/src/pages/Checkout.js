import React from 'react';
import CheckoutProducts from '../components/CheckoutProducts';
import CheckoutDetails from '../components/CheckoutDetails';
import Navbar from '../components/Navbar';
import { CheckoutMain } from './styles/checkout.styles';

function Checkout() {
  return (
    <div>
      <Navbar />
      <CheckoutMain>
        {/* <CheckoutContent> */}
        <CheckoutProducts />
        {/* </CheckoutContent> */}
        {/* <CheckoutContent> */}
        <CheckoutDetails />
        {/* </CheckoutContent> */}
      </CheckoutMain>
    </div>
  );
}

export default Checkout;
