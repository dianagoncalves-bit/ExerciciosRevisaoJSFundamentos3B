// EXERCÍCIO 09 - FIND - ALUNO
// Crie um array de objetos com nome e matrícula de quatro alunos.
// Utilize find() para localizar o aluno com a matrícula 103.
// Mostre o aluno encontrado.
//
// Escreva sua solução abaixo:

const alunos = [
    { nome: "Selwyn Kane", matricula: 666 },
    { nome: "Brianna Mathus", matricula: 444 },
    { nome: "Nick Deives", matricula: 690 },
    { nome: "Diana Gouveia", matricula: 782 }
];

const encontrar = alunos.find(codigo => codigo.matricula === 666);

console.log(encontrar);