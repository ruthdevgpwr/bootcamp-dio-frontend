// EXERCICIO 01 - Crie um programa que dado um número imprima a sua tabuada

const numero = 10;

for (let i = 1; i < 11; i++) {
  console.log(i * numero);
}

const numerosPares = [];

for (let i = 0; i < 10; i++) {
  const numeroPar = i % 2 === 0;
  if (numeroPar) {
    numerosPares.push(i);
  }
}

console.log(numerosPares);
