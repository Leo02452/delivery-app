import { loginDark } from '../pages/styles/loginInfos';
import { registerLight } from '../pages/styles/registerInfos';
import { navbarDark } from '../components/styles/navbarInfo';
import { productCardDark } from '../components/styles/productCardInfos';
import { buttonCardDark } from '../components/styles/buttonCartInfos';
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
  navbar: navbarDark,
  productCard: productCardDark,
  buttonCard: buttonCardDark,
  checkoutPage: checkoutLight,
  orderCard: orderCardLight,
};
