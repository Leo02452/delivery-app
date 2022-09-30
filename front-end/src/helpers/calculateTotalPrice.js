const calculateTotalPrice = (array) => array
  .reduce((acc, product) => acc + Number(product.price) * product.quantity, 0);

export default calculateTotalPrice;
