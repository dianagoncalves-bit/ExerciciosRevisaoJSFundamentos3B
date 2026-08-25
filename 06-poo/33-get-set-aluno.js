// EXERCÍCIO 33 - GETTERS E SETTERS
// Crie uma classe Aluno com o campo privado #nota.
// Crie get nota e set nota. O setter deve aceitar somente valores entre 0 e 10.
// Crie um aluno, altere sua nota e mostre o resultado.
//
// Escreva sua solução abaixo:

class Aluno {

  #nota;

  constructor(notaInicial = 0) {
    this.nota = notaInicial; 
  }

  get nota() {
    return this.#nota;
  }

  set nota(novaNota) {
    if (novaNota >= 0 && novaNota <= 10) {
      this.#nota = novaNota;
    } else {
      console.log("Erro: A nota deve estar entre 0 e 10.");
    }
  }
}


const aluno1 = new Aluno(7);
console.log(`Nota inicial: ${aluno1.nota}`); 


aluno1.nota = 9.5;
console.log(`Nota alterada: ${aluno1.nota}`); 

aluno1.nota = 12;
console.log(`Nota final mantida: ${aluno1.nota}`); 