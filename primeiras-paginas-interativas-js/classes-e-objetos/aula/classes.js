class Pessoa {
  nome;
  idade;
  anoDeNascimento;

  constructor(nome, idade) {
    this.nome = nome;
    this.idade = idade;
    this.anoDeNascimento = 2022 - idade;
  }

  descrever() {
    console.log(`Nome: ${this.nome}, idade: ${this.idade}`);
  }
}

const ruth = new Pessoa("Ruth", 30);
console.log(ruth);

const emerson = new Pessoa("Emerson", 34);

console.log(emerson);
