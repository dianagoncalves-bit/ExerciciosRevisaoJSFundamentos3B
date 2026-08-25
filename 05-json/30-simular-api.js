// EXERCÍCIO 30 - SIMULANDO RESPOSTA DE API
// Crie um objeto resposta com as propriedades status, quantidade e clientes.
// A propriedade clientes deve conter um array com dois objetos.
// Converta a resposta para JSON e depois novamente para objeto.
// Mostre o status e os clientes recebidos.
//
// Escreva sua solução abaixo:

const resposta = {
  status: "Lotado",
  quantidade: 2,
  clientes: [
    { id: 1, nome: "Selwyn Kane", email: "selwyn.kane@email.com" },
    { id: 2, nome: "Wriothesley", email: "wriothesley@email.com" }
  ]
};

const respostaJSON = JSON.stringify(resposta);

const objetoConvertido = JSON.parse(respostaJSON);

console.log("Status:", objetoConvertido.status);
console.log("Clientes:", objetoConvertido.clientes);