import { loginLight } from '../pages/styles/loginInfos';
import { registerLight } from '../pages/styles/registerInfos';
import { navbarLight } from '../components/styles/navbarInfo';
import { productCardLight } from '../components/styles/productCardInfos';
import { buttonCardLight } from '../components/styles/buttonCartInfos';

export default {
  title: 'light',
  general: {
    background: 'var(--g1)',
    color: 'var(--g12)',
  },
  login: loginLight,
  register: registerLight,
  navbar: navbarLight,
  productCard: productCardLight,
  buttonCard: buttonCardLight,
};
