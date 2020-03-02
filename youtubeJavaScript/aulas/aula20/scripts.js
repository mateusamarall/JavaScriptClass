let numbers = document.getElementById("numbers");
let numeros = [4, 2, 10, 123, -3, 32, 0, 34, 12, 91, 45, 3, 21, 87, 61];

for (let i = 1; i < numeros.length; i++) {
  let x = numeros[i];
  let j = i;
  while (j > 0 && x < numeros[j - 1]) {
    numeros[j] = numeros[j - 1];
    j--;
  }
  numeros[j] = x;

  numbers.innerHTML = numeros;
}
