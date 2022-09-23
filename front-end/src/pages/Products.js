import { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import ProductCard from '../components/ProductCard';
import instance from '../services/axiosInstance';

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
      <Navbar />
      <div>
        {
          products?.map((product) => (
            <ProductCard
              key={ product.id }
              product={ product }
            />))
        }
      </div>
    </>
  );
}

export default Products;
