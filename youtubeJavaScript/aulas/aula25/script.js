let email = document.getElementById("email");
let senha = document.getElementById("senha");
let form = document.getElementById("form");

form.addEventListener("submit", event => {
  event.preventDefault();
  axios
    .post("https://reqres.in/api/register", {
      email: email.value,
      password: senha.value
    })
    .then(response => {
      return console.log(
        `id: ${response.data.id} token: ${response.data.token}`
      );
    })
    .catch(error => {
      console.log("houve um erro" + error);
    });
});
