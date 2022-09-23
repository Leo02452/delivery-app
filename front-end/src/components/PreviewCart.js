import { useNavigate } from 'react-router-dom';

export default function PreviewCart() {
  const navigate = useNavigate();

  const [valueTotal, setValueTotal] = (0);

  function handleClick() {
    console.log(setValueTotal);
    navigate('/costumer/checkout');
  }

  return (
    <div>
      <button
        type="button"
        data-testid="customer_products__checkout-bottom-value"
        onClick={ () => handleClick() }
      >
        Ver Carrinho:
        {valueTotal}
      </button>
    </div>
  );
}
