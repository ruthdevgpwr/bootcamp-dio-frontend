// 1 Faça um algoritmo que dado as 3 notas tiradas por um aluno em um semestre da faculdade calcule e imprima a sua média e a sua classificação conforme a tabela.Faça

// Média = nota 1 + nota 2 + nota 3 / 3

// Classificação:
// - Média menor que 5, rperovação
// - Média entre 5 e 7, recuperação
// - Média acima de 7, passou de semestre

const nota1 = 8;
const nota2 = 8;
const nota3 = 10;
const notaMedia = (nota1 + nota2 + nota3) / 3;

if (notaMedia < 5) {
  console.log("Aluno reprovado com média " + notaMedia.toFixed(2));
} else if (notaMedia >= 5 && notaMedia <= 7) {
  console.log("Aluno está em recuperação");
} else {
  console.log("Aluno Aprovado com média = " + notaMedia.toFixed(2));
}
