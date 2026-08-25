// EXERCÍCIO 23 - SPREAD EM ARRAY
// Crie um array de convidados da família e outro de amigos.
// Utilize Spread para criar um terceiro array contendo todos os convidados.
//
// Escreva sua solução abaixo:

const convidadosFamilia = ["Tio Luciano", "Tia Lucimara", "Mamãe Lilian"];
const convidadosAmigos = ["Edward Elric", "Sauron", "Rock Lee"];

const todosConvidados = [...convidadosFamilia, ...convidadosAmigos];

console.log(todosConvidados);