function roleTranslate(user) {
  if (user.role === 'seller') {
    return { ...user, role: 'P. Vendedora' };
  }
  if (user.role === 'customer') {
    return { ...user, role: 'Cliente' };
  }
  return user;
}

export default roleTranslate;
