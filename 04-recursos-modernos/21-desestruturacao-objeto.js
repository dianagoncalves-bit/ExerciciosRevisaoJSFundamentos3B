// EXERCÍCIO 21 - DESESTRUTURAÇÃO DE OBJETO
// Crie um objeto viagem com destino, dias e valor.
// Utilize desestruturação para criar variáveis com essas propriedades.
// Mostre as variáveis no console.
//
// Escreva sua solução abaixo:

const viagem = {
  destino: "Oz Azara",
  dias: 7,
  valor: 4500.00
};

const { destino, dias, valor } = viagem;

console.log(`Destino: ${destino}`);
console.log(`Duração: ${dias} dias`);
console.log(`Valor por pessoa: R$ ${valor.toFixed(2)}`);