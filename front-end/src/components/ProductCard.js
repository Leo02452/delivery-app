import { useState } from 'react';
import PropTypes from 'prop-types';
import { ProductCardMain, Price, Title } from './styles/productCard.styles';

function ProductCard({ product }) {
  const [quantity, setQuantity] = useState(0);

  const { id, name, price, urlImage } = product;
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
    <ProductCardMain>
      <img
        src={ urlImage }
        alt="product_image"
        data-testid={ `customer_products__img-card-bg-image-${id}` }
      />
      <Title
        data-testid={ `customer_products__element-card-title-${id}` }
      >
        {name}
      </Title>
      <Price
        data-testid={ `customer_products__element-card-price-${id}` }
      >
        {price.toString().replace('.', ',')}
        {/* {price.toLocaleString('pt-BR')} */}
      </Price>
      <div>
        <button
          type="button"
          data-testid={ `customer_products__button-card-rm-item-${id}` }
          value="decrement-button"
          onClick={ handleClick }
        >
          -
        </button>
        <input
          data-testid={ `customer_products__input-card-quantity-${id}` }
          value={ quantity }
        />
        <button
          type="button"
          data-testid={ `customer_products__button-card-add-item-${id}` }
          value="increment-button"
          onClick={ handleClick }
        >
          +
        </button>
      </div>
    </ProductCardMain>
  );
}

ProductCard.propTypes = ({
  product: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    price: PropTypes.number,
    urlImage: PropTypes.string,
  }).isRequired,
});

export default ProductCard;
