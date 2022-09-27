import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { updateCart, removeFromCart } from '../redux/reduces/cartReduce';

function ProductCard({ product }) {
  const [quantity, setQuantity] = useState(0);
  const dispatch = useDispatch();

  const { id, name, price, urlImage } = product;

  function handleClick({ target }) {
    if (target.value === 'increment-button') {
      setQuantity(quantity + 1);
    }
    if (target.value === 'decrement-button') {
      if (quantity > 0) {
        setQuantity(quantity - 1);
      } else {
        setQuantity(0);
      }
    }
  }

  function handleChange({ target }) {
    if (Number(target.value) < 0) {
      setQuantity(0);
    } else {
      setQuantity(Number(target.value));
    }
  }

  useEffect(() => {
    if (quantity === 0) {
      dispatch(removeFromCart(product));
    } else {
      dispatch(updateCart({ ...product, quantity }));
    }
  }, [quantity, product, dispatch]);

  return (
    <div>
      <img
        src={ urlImage }
        alt="product_image"
        data-testid={ `customer_products__img-card-bg-image-${id}` }
      />
      <span
        data-testid={ `customer_products__element-card-title-${id}` }
      >
        {name}
      </span>
      <span
        data-testid={ `customer_products__element-card-price-${id}` }
      >
        {price.toString().replace('.', ',')}
        {/* {price.toLocaleString('pt-BR')} */}
      </span>
      <div>
        <button
          type="button"
          data-testid={ `customer_products__button-card-rm-item-${id}` }
          value="decrement-button"
          onClick={ (e) => handleClick(e) }
        >
          -
        </button>
        <input
          data-testid={ `customer_products__input-card-quantity-${id}` }
          type="number"
          value={ quantity }
          onChange={ (e) => handleChange(e) }
        />
        <button
          type="button"
          data-testid={ `customer_products__button-card-add-item-${id}` }
          value="increment-button"
          onClick={ (e) => handleClick(e) }
        >
          +
        </button>
      </div>
    </div>
  );
}

ProductCard.propTypes = ({
  product: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    price: PropTypes.string,
    urlImage: PropTypes.string,
  }).isRequired,
});

export default ProductCard;
