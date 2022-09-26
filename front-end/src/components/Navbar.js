import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { getUser } from '../helpers/userStorage';

export default function Navbar() {
  const navigate = useNavigate();

  const [userData, setUserData] = useState({ name: '', token: '', email: '', role: '' });

  useEffect(() => {
    const user = getUser();
    setUserData(user);
  }, []);

  function handleLogout() {
    localStorage.clear();
    navigate('/login');
  }

  return (
    <div className="navbar">
      <form>
        <li data-testid="customer_products__element-navbar-link-products">
          <Link to="/customer/products">PRODUTOS</Link>
        </li>
        <li data-testid="customer_products__element-navbar-link-orders">
          <Link to="/customer/orders">MEUS PEDIDOS</Link>
        </li>
        <li data-testid="customer_products__element-navbar-user-full-name">
          <h3>{userData.name}</h3>
        </li>
        <button
          data-testid="customer_products__element-navbar-link-logout"
          type="button"
          name="logout-button"
          onClick={ () => handleLogout() }
        >
          Sair
        </button>
      </form>
    </div>
  );
}
