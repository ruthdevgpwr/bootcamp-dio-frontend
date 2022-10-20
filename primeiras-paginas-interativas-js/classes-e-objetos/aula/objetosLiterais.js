// objetos literais

const ruth = {
  nome: "Ruth Dantas",
  idade: 30,
  descrever: function () {
    console.log(`Nome: ${this.nome}, idade: ${this.idade}`);
  },
};

console.log(ruth);

ruth.altura = 1.65;

console.log(ruth);

ruth.descrever();
