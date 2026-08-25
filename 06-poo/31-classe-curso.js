// EXERCÍCIO 31 - CLASSE E INSTÂNCIAS
// Crie uma classe Curso com constructor para nome, duracao e modalidade.
// Crie um método exibirInformacoes() e duas instâncias da classe.
// Mostre os dados dos dois cursos.
//
// Escreva sua solução abaixo:

class Curso {
  constructor(nome, duracao, modalidade) {
    this.nome = nome;
    this.duracao = duracao; 
    this.modalidade = modalidade; 
  }

  exibirInformacoes() {
    console.log(`Curso: ${this.nome} | Duração: ${this.duracao} | Modalidade: ${this.modalidade}`);
  }
}

const curso1 = new Curso("Veterinaria", "4 anos", "presencial");
const curso2 = new Curso("historia", "4 anos", "Presencial");

curso1.exibirInformacoes();
curso2.exibirInformacoes();
