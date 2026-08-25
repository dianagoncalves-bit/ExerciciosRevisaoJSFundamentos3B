// EXERCÍCIO 29 - ARRAY EM JSON
// Crie um array com três objetos de tarefas contendo id, descricao e concluida.
// Converta o array para JSON e mostre o resultado.
//
// Escreva sua solução abaixo:

const tarefas = [
  { id: 1, descricao: "pegar a cora do rei das sombras", concluida: true },
  { id: 2, descricao: "Recuperar a memoria da bree", concluida: true },
  { id: 3, descricao: "assumir o poder da tavola redonda", concluida: false }
];

const tarefasJSON = JSON.stringify(tarefas, null, 2);

console.log(tarefasJSON);