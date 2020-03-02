let numbers = document.getElementById("numbers");
let numeros = [4, 2, 10, 123, -3, 32, 0, 34, 12, 91, 45, 3, 21, 87, 61];

for (let i = 0; i < numeros.length - 1; i++) {
  let min = i;
  for (let j = i + 1; j < numeros.length; j++) {
    if (numeros[j] < numeros[min]) {
      min = j;
    }
    let tmp = numeros[i];
    numeros[i] = numeros[min];
    numeros[min] = tmp;
  }
  numbers.innerHTML = numeros;
}
