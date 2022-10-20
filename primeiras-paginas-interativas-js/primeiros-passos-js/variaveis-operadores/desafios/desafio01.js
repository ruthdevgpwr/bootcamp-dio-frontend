//Faça um programa para calcular o valor gasto de uma viagem
//Você terá três variáveis:
// 1- Preço do Combustível
// 2 -Gast médio de combustível do carro por Km
// 3 - Distância em KM da viagem;

// Imprima no console o valor que será gasto de combustível para realizar esta viagem

const precoCombustivel = 5.83;
const kmPorLitro = 12;
const distanciaKm = 120;

const litrosConsumidos = distanciaKm / kmPorLitro;
const valorGastoViagem = litrosConsumidos * precoCombustivel;

//tofixed - parametro recebe a quantidade de casas eu quero após a vírgula

console.log(
  `O valor gasto em combustível na viagem foi de R$ ${valorGastoViagem.toFixed(
    2
  )}`
);
