import { loginLight } from '../pages/styles/loginInfos';
import { registerLight } from '../pages/styles/registerInfos';
import { navbarLight } from '../components/styles/navbarInfo';
import { productCardLight } from '../components/styles/productCardInfos';
import { buttonCardLight } from '../components/styles/buttonCartInfos';
import { checkoutLight } from '../pages/styles/checkoutInfo';
import { orderCardLight } from '../components/styles/orderCardInfo';
import { checkDetailsLight } from '../components/styles/checkoutDetailsInfo';
import { checkProductsLight } from '../components/styles/checkoutProductsInfo';
import { orderDetailsLight } from '../pages/styles/orderDetailsInfo';

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
  checkoutDetails: checkDetailsLight,
  checkoutProducts: checkProductsLight,
  orderCard: orderCardLight,
  orderDetails: orderDetailsLight,
};
