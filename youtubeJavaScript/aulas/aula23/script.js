let form = document.querySelector("form");

form.addEventListener("submit", event => {
  event.preventDefault();
  for (let i = 0; i < form.elements.length; i++) {
    if (form.elements[i].type !== "submit") {
      if (form.elements[i].value === "") {
        form.elements[i].classList.add("error");
      } else {
        form.classList.remove("error");
      }
    }
  }
});
