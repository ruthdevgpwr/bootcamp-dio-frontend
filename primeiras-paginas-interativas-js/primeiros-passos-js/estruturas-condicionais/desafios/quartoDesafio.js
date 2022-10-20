//Faça um programa para calcular o valor gasto de uma viagem
//Você terá três variáveis:
// 1 - Preço do etanol;
// 2- Preço da gasolina
// 3 - O tipo de combustível que esta no seu carro
// 4 -Gasto médio de combustível do carro por Km
// 5 - Distância em KM da viagem;

// Imprima no console o valor que será gasto de combustível para realizar esta viagem

const tipoCombustivel = "etanol";
const precoEtanol = 5.79;
const precoGasolina = 6.66;
const kmPorLitro = 10;
const distanciaViagemKm = 100;

const litrosConsumidos = distanciaViagemKm / kmPorLitro;

if (
  tipoCombustivel === "gasolina" ||
  tipoCombustivel === "Gasolina" ||
  tipoCombustivel === "GASOLINA"
) {
  const valorViagem = litrosConsumidos * precoGasolina;
  console.log(valorViagem.toFixed(2));
} else if (
  tipoCombustivel === "etanol" ||
  tipoCombustivel === "Etanol" ||
  tipoCombustivel === "ETANOL"
) {
  const valorViagem = litrosConsumidos * precoEtanol;
  console.log(valorViagem.toFixed(2));
} else {
  console.log("O Tipo de gasolina não é válido");
}
