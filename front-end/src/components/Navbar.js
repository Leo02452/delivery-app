import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { getUser } from '../helpers/userStorage';
import { NavbarMain, NavbarContent, NavLink, ButtonLogout } from './styles/navbar.styles';

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
    <NavbarMain className="navbar">
      <NavbarContent>
        <NavLink
          data-testid="customer_products__element-navbar-link-products"
          to="/customer/products"
        >
          PRODUTOS
        </NavLink>
        <NavLink
          to="/customer/orders"
          data-testid="customer_products__element-navbar-link-orders"
        >
          MEUS PEDIDOS
        </NavLink>
        <h3
          data-testid="customer_products__element-navbar-user-full-name"
        >
          {userData.name}
        </h3>
        <ButtonLogout
          data-testid="customer_products__element-navbar-link-logout"
          type="button"
          name="logout-button"
          onClick={ () => handleLogout() }
        >
          Sair
        </ButtonLogout>
      </NavbarContent>
    </NavbarMain>
    // </div>
  );
}
