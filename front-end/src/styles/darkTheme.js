import { loginDark } from '../pages/styles/loginInfos';
import { registerLight } from '../pages/styles/registerInfos';
import { navbarDark } from '../components/styles/navbarInfo';
import { productCardDark } from '../components/styles/productCardInfos';
import { buttonCardDark } from '../components/styles/buttonCartInfos';
import { checkoutDark } from '../pages/styles/checkoutInfo';
import { orderCardDark } from '../components/styles/orderCardInfo';
import { checkDetailsDark } from '../components/styles/checkoutDetailsInfo';
import { checkProductsDark } from '../components/styles/checkoutProductsInfo';

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
  checkoutPage: checkoutDark,
  checkoutDetails: checkDetailsDark,
  checkoutProducts: checkProductsDark,
  orderCard: orderCardDark,
};
