// EXERCÍCIO 19 - ARRAY DE OBJETOS
// Crie um array com três objetos de jogos.
// Cada jogo deve possuir titulo, plataforma e classificacao.
// Percorra o array e mostre o título e a plataforma de cada jogo.
//
// Escreva sua solução abaixo:

const jogos = [
  { titulo: "shadow of the colossus", plataforma: "playstation 5", classificacao: "12 +" },
  { titulo: "Genshin Impact", plataforma: "Todas menos nintendo", classificacao: "12 +" },
  { titulo: "", plataforma: "Todas menos nintendo", classificacao: "12 +" }
];

jogos.forEach(jogo => {
  console.log(`Jogo: ${jogo.titulo} | Plataforma: ${jogo.plataforma}`);
});