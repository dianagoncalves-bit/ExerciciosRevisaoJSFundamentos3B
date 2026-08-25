// EXERCÍCIO 20 - FILTRANDO OBJETOS
// Crie um array com cinco funcionários contendo nome e salario.
// Utilize filter() para selecionar funcionários com salário acima de R$ 3.000.
// Mostre o novo array.
//
// Escreva sua solução abaixo:

const funcionarios = [
  { nome: "Wriothesley", salario: 82500 },
  { nome: "Selwyn Kane", salario: 999666000 },
  { nome: "Takumi Usui", salario: 81800 },
  { nome: "Roronoa Zoro", salario: 85500 },
  { nome: "Dainsleif", salario: 10100 }
];

const salariosAltos = funcionarios.filter(funcionario => funcionario.salario > 3000);

console.log(salariosAltos);
