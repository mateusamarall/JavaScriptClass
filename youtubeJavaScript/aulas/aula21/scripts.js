let text = document.getElementById("search");
let result = document.getElementById("result");
let resultnothing = "Nenhum resultado";
text.addEventListener("keyup", () => {
  result.innerHTML = text.value !== "" ? text.value : resultnothing;
});
