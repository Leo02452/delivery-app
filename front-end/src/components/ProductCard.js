import { useState } from 'react';
import PropTypes from 'prop-types';

function ProductCard({ product }) {
  const [quantity, setQuantity] = useState(0);

  const { id, name, price, url_image: urlImage } = product;
  console.log(product);

  function handleClick({ target }) {
    if (target.value === 'increment-button') {
      setQuantity(quantity + 1);
    } else {
      if (quantity > 0) {
        setQuantity(quantity - 1);
      }
      setQuantity(0);
    }
  }

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
        {price}
      </span>
      <div>
        <button
          type="button"
          data-testid={ `customer_products__button-card-rm-item-${id}` }
          value="decrement-button"
          onClick={ handleClick }
        >
          -
        </button>
        <span
          data-testid={ `customer_products__input-card-quantity-${id}` }
        >
          {quantity}
        </span>
        <button
          type="button"
          data-testid={ `customer_products__button-card-add-item-${id}` }
          value="increment-button"
          onClick={ handleClick }
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
    price: PropTypes.number,
    url_image: PropTypes.string,
  }).isRequired,
});

export default ProductCard;
