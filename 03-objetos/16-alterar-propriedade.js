// EXERCÍCIO 16 - ALTERANDO PROPRIEDADE
// Crie um objeto ingresso com evento, preco e quantidade.
// Altere o preço e aumente a quantidade em duas unidades.
// Mostre o objeto antes e depois das alterações.
//
// Escreva sua solução abaixo:

const ingresso = {
    evento: "Selwyn Kane 666",
    preco: 103,
    quantidade: 1
}
console.log("comoEraAntes:", { ...ingresso })

ingresso.preco = 309
ingresso.quantidade += 2;

console.log("comoEAgora:", ingresso);
