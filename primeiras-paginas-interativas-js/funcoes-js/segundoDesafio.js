// Verifique se uma pessoa possui maioridade ou não

function escrevaSeuNome(nome) {
  return `${nome}`;
}

function verificarMaiorIdade(idade) {
  if (idade >= 18) {
    return `${escrevaSeuNome("Ruth")}, você é maior de idade`;
  } else {
    return "Você é menor de idade";
  }
}

console.log(verificarMaiorIdade(30));
