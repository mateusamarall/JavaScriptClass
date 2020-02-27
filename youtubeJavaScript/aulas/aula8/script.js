//criando um elemento
let versa = document.createElement('p');
versa.innerHTML='versa';

let sentra = document.createElement('p');
sentra.innerHTML='sentra';
//inserindo este elemento com appendchild na div com id nissan
document.getElementById('nissan').appendChild(versa);
document.getElementById('nissan').appendChild(sentra);

document.getElementById('nissan').removeChild(versa);

console.log()