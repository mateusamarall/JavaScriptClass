let numbers = document.getElementById("number");

let numeros = [4, 2, 10, 123, -3, 32, 0, 34, 12, 91, 45, 3, 21, 87, 61];
//metodo bubble sort
for (let i = 0; i < numeros.length - 1; i++) {
  for (let j = 0; j < numeros.length - 1 - i; j++) {
    if (numeros[j] > numeros[j + 1]) {
      let tmp = numeros[j];
      numeros[j] = numeros[j + 1];
      numeros[j + 1] = tmp;
    }
    numbers.innerHTML = numeros + "<br>";
  }
}
