// EXERCÍCIO 18 - UTILIZANDO THIS
// Crie um objeto curso com nome, modalidade e um método descrever().
// O método deve utilizar this e retornar uma frase com os dados do curso.
//
// Escreva sua solução abaixo:

const curso = {
  nome: "veterionaria",
  modalidade: "presencial",
  descrever() {
    return `O curso ${this.nome} é oferecido na modalidade ${this.modalidade}.`;
  }
};

console.log(curso.descrever())