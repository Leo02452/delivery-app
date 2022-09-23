import { Link } from 'react-router-dom';

export default function navbar() {
  return (
    <div className="navbar">
      <form>
        <li data-testid="customer_products__element-navbar-link-products">
          <Link to="/products">PRODUTOS</Link>
        </li>
        <li data-testid="customer_products__element-navbar-link-orders">
          <Link to="/">MEUS PRODUTOS</Link>
        </li>
        <li data-testid="customer_products__element-navbar-user-full-name">
          <h3>NomeDaPessoa</h3>
        </li>
        <li data-testid="customer_products__element-navbar-link-logout">
          <Link to="/login">Sair</Link>
        </li>
      </form>
    </div>
  );
}
