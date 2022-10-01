import { loginDark } from '../pages/styles/loginInfos';
import { registerLight } from '../pages/styles/registerInfos';
import { navbarLight } from '../components/styles/navbarInfo';
import { productCardLight } from '../components/styles/productCardInfos';
import { buttonCardLight } from '../components/styles/buttonCartInfos';
import { checkoutLight } from '../pages/styles/checkoutInfo';
import { orderCardLight } from '../components/styles/orderCardInfo';

export default {
  title: 'light',
  general: {
    background: 'var(--g11)',
    color: 'var(--g2)',
  },
  login: loginDark,
  register: registerLight,
  navbar: navbarLight,
  productCard: productCardLight,
  buttonCard: buttonCardLight,
  checkoutPage: checkoutLight,
  orderCard: orderCardLight,
};
