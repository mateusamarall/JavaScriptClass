let requesthtml = document.getElementById("request");
axios
  .get("https://api.github.com/users/mateusamarall")
  .then(response => {
    requesthtml.innerHTML = response.data.name + "<br/>" + response.data.bio;
    console.log(response);
  })
  .catch(error => {
    requesthtml.innerHTML = "houve um error";
    console.log(error);
  });
