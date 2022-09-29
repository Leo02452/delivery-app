const calculateTotalPrice = (array) => array
  .reduce((acc, product) => {
    console.log(`preço: ${product.price}, qtde: ${product.quantity}, acc: ${acc}`);

    return parseFloat((acc + (parseFloat(product.price) * product.quantity)).toFixed(2));
  }, 0);

export default calculateTotalPrice;
