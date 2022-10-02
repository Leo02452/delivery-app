import { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import ProductCard from '../components/ProductCard';
import instance from '../services/axiosInstance';
import { ProductMain, ProductContent } from './styles/products.styles';
import ButtonCart from '../components/buttonCart';
import Switcher from '../components/Switcher';

function Products() {
  const [products, setProducts] = useState();

  useEffect(() => {
    async function getAllProducts() {
      try {
        const response = await instance.get('customer/products');
        setProducts(response.data);
      } catch (error) {
        setProducts(error.response.data);
      }
    }

    getAllProducts();
  }, []);

  return (
    <>
      <Switcher />
      <Navbar />
      <ProductMain>
        <ProductContent>
          {
            products?.map((product) => (
              <ProductCard
                key={ product.id }
                product={ product }
              />))
          }
        </ProductContent>
        <ButtonCart />
      </ProductMain>
    </>
  );
}

export default Products;
