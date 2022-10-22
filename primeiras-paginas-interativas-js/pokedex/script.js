const botaoTeste = document.getElementById("botao");

function mudarBotao() {
  botaoTeste.classList.toggle("botaoClicado");
  if (botaoTeste.classList.contains("botaoClicado")) {
    botaoTeste.innerHTML = "Clicou";
  } else {
    botaoTeste.innerHTML = "Clique";
  }
}

botao.addEventListener("click", mudarBotao);
