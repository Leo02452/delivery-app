const calculateTotalPrice = (array) => array
  .reduce((acc, product) => Number((acc + (Number(product.price) * product.quantity))
    .toFixed(2)), 0);

export default calculateTotalPrice;
