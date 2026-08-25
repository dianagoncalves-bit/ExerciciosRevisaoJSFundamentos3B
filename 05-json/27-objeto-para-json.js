// EXERCÍCIO 27 - OBJETO PARA JSON
// Crie um objeto reserva com codigo, hospede e numeroNoites.
// Converta o objeto para JSON utilizando JSON.stringify()
// e mostre o resultado.
//
// Escreva sua solução abaixo:

const reserva = {
    codigo: 666999,
    hospede: "Selwyn Kane",
    numeroNoite:30
}

const objeto = JSON.stringify(reserva);

console.log(objeto)