let text = document.getElementById("text");
let result = document.getElementById("result");
text.addEventListener("keypress", event => {
  if (event.keyCode == 13) {
    result.style.display = "block";
  }
});
