// EXERCÍCIO 28 - JSON PARA OBJETO
// Considere a String JSON: '{"titulo":"Curso de Node.js","duracao":40,"ativo":true}'.
// Converta-a em objeto utilizando JSON.parse() e mostre somente a duração.
//
// Escreva sua solução abaixo:

const jsonString = '{"titulo":"Curso de Node.js","duracao":40,"ativo":true}'

const curso = JSON.parse(jsonString);

console.log(`Duração do curso: ${curso.duracao} horas`);