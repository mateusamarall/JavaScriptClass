let nome = document.getElementById("name");
let job = document.getElementById("job");
let form = document.getElementById("form");

form.addEventListener("submit", event => {
  event.preventDefault();
  axios
    .post("https://reqres.in/api/users/2", {
      name: nome.value,
      job: job.value
    })
    .then(response => {
      return console.log(
        `name: ${response.data.name} job: ${response.data.job}`
      );
    })
    .catch(error => {
      console.log("houve um erro" + error);
    });
});
