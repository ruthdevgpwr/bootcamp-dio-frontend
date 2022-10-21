//EXERCICIO 02 - Crie um programa que seja capaz de percorrer uma lista de números e imprima cada número par encontrado

const numeros = [1, 6, 10, 70, 33, 23, 22, 10, 30, 34, 35, 55, 60, 1090292092];

for (let i = 0; i < numeros.length; i++) {
  const numero = numeros[i];

  if (numero % 2 === 0) {
    console.log(numero);
  }
}
