async function userLogin({ email, password }) {
  const options = {
    method: POST,
    headers: { 'Content-Type': 'application/json' },
    body: { email, password },
  };
  const response = await fetch('localhost:3001/login', options);

  return response;
}

export default userLogin;
// fetch("https://backefront.com.br/api/users", {
//   method: "POST",
//   headers: {
//     "Content-Type": "application/json",
//   },
//   body: JSON.stringify(data),
// })
