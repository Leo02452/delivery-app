export const VALID_EMAIL = 'email@email.com';
export const VALID_PASSWORD = 'valid-password';
export const VALID_NAME = 'any-name-bigger-than-12-characters';
export const INVALID_EMAIL = 'invalid-email';
export const INVALID_PASSWORD = 'abc';

const commonUserAttribute = {
  id: 1,
  name: VALID_NAME,
  email: VALID_EMAIL,
};

export const customerMock = {
  ...commonUserAttribute,
  role: 'customer',
};

export const sellerMock = {
  ...commonUserAttribute,
  role: 'seller',
};

export const administratorMock = {
  ...commonUserAttribute,
  role: 'administrator',
};
