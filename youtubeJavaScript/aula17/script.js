let nome = document.getElementById("nome");
let confirmanome = document.getElementById("confirmanome");
//evento para quando sair do elemento executar uma ação
nome.addEventListener("blur", () => {
  confirmanome.value = nome.value;
});
