import { loginLight } from '../pages/styles/loginInfos';
import { registerLight } from '../pages/styles/registerInfos';
import { navbarLight } from '../components/styles/navbarInfo';
import { productCardLight } from '../components/styles/productCardInfos';
import { buttonCardLight } from '../components/styles/buttonCartInfos';
import { checkoutLight } from '../pages/styles/checkoutInfo';

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
  checkoutPage: checkoutLight,
};
