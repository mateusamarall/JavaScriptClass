let linguagens = document.getElementById("linguagens");
linguagens.addEventListener("change", () => {
  let result = linguagens.options[linguagens.selectedIndex].text;
  console.log(result);
});
