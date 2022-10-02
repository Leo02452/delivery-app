const g12 = 'var(--g12)';

export const productCardLight = {
  background: 'var(--g3)',
  color: 'var(--g11)',
  shadow: '1px 4px 7px 0px rgba(0,0,0,0.6)',
  button: {
    background: 'linear-gradient(to bottom right, var(--p9), var(--p10))',
    color: 'var(--p1)',
    border: 'var(--p10)',
  },
};

export const productCardDark = {
  background: g12,
  color: 'var(--g12)',
  shadow: '1px 4px 7px 0px rgba(80,80,80,0.6)',
  button: {
    background: 'linear-gradient(to bottom right, var(--p4), var(--p8))',
    color: g12,
    border: 'var(--p8)',
  },
};
