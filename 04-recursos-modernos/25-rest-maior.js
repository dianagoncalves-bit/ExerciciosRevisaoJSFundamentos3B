// EXERCÍCIO 25 - REST PARAMETERS
// Crie uma função maiorNumero que receba uma quantidade indefinida de números
// utilizando Rest. A função deve retornar o maior valor recebido.
// Teste com pelo menos seis números.
//
// Escreva sua solução abaixo:

function maiorNumero(...numeros) {
 
  return Math.max(...numeros);
}

const resultado = maiorNumero(14, 43, 6, 90, 22, 69);

console.log(`o maior número é: ${resultado}`);