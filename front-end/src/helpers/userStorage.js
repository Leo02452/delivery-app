function getUser() {
  const user = JSON.parse(localStorage.getItem('user'));
  return user;
}

function saveUser(user) {
  return localStorage.setItem('user', JSON.stringify(user));
}

export default { getUser, saveUser };
