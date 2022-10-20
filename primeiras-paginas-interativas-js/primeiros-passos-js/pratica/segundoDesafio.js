// Elabore um algoritmo que calcule o que deve ser pago por um precoNormalDoProduto, considerando o preço normal de etiqueta e a escolha da condição de formaDePagamento.toExponentialUtilize os códigos de tabela a seguir para ler qual a condição de pagamento escolhida e eefetuar o cálculo adequado.

// Código Condição de Pagamento:

// 1 - À vista no Débito, recebe 10% de desconto;
// 2 - À vista no Débito, recebe 10% de desconto;
// 3 - Parcelado em 2x, preço normal de etiqueta sem juros;
// 4 - Acima de duas vezes, preço normal da etiqueta mais juros de 10%;

const precoNormalDoProduto = 100;
const formaDePagamento = 3;

if (formaDePagamento === 1) {
  console.log(
    `Valor à vista no Débito = R$ ${
      precoNormalDoProduto - precoNormalDoProduto * 0.1
    }`
  );
} else if (formaDePagamento === 2) {
  console.log(
    `Valor à vista no PIX ou no Dinheiro = R$ ${
      precoNormalDoProduto - precoNormalDoProduto * 0.15
    }`
  );
} else if (formaDePagamento === 3) {
  console.log("Valor parcelado em 2x = " + "R$ " + precoNormalDoProduto);
} else {
  console.log(
    `Valor parcelado acima de duas vezes = R$ ${
      precoNormalDoProduto + (precoNormalDoProduto + 0.1)
    }`
  );
}
