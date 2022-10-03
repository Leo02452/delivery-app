import React from 'react';
import CheckoutProducts from '../components/CheckoutProducts';
import CheckoutDetails from '../components/CheckoutDetails';
import Navbar from '../components/Navbar';
import { CheckoutMain } from './styles/checkout.styles';
import Switcher from '../components/Switcher';

function Checkout() {
  return (
    <div>
      <Switcher />
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
