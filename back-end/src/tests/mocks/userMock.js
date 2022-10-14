const customerMock = {
  name: 'any-name',
  email: 'any-email@email.com',
  password: '9b55aff2e8388c3601e2f7440320c813',
  role: 'customer'
}

const validBody = {
  email: 'any-email@email.com',
  password: 'any-password'
}

const createdCustomerMock = {
  id: 1,
  ...customerMock
}

const createdCustomerBody = {
  name: 'any-name',
  email: 'any-email@email.com',
  password: 'any-password',
}

const createdUserBody = {
  name: 'any-name',
  email: 'any-email@email.com',
  password: 'any-password',
  role: 'seller'
}

const { password, ...customerWithoutPassword } = customerMock;
const { password: pwd, id, ...customerWithoutPasswordAndId } = customerMock;

module.exports = {
  customerMock,
  validBody,
  createdCustomerBody,
  createdCustomerMock,
  customerWithoutPassword,
  customerWithoutPasswordAndId,
  createdUserBody
};
