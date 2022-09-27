const calculateTotalPrice = (array) => array
  .reduce((acc, product) => acc + Number(
    (Number(product.price) * product.quantity).toFixed(2),
  ), 0);

export default calculateTotalPrice;
