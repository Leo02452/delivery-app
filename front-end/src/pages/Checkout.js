import React from 'react';
import CheckoutProducts from '../components/CheckoutProducts';
import Navbar from '../components/Navbar';

function Checkout() {
  return (
    <div>
      <header>
        <Navbar />
      </header>
      <CheckoutProducts />
    </div>
  );
}

export default Checkout;
