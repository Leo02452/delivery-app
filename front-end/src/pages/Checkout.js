import React from 'react';
import CheckoutProducts from '../components/CheckoutProducts';
import CheckoutDetails from '../components/CheckoutDetails';
import Navbar from '../components/Navbar';

function Checkout() {
  return (
    <div>
      <header>
        <Navbar />
      </header>
      <CheckoutProducts />
      <CheckoutDetails />
    </div>
  );
}

export default Checkout;
