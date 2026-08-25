// EXERCÍCIO 35 - POLIMORFISMO
// Crie uma classe Pagamento com o método processar().
// Crie as classes Pix e Cartao herdando de Pagamento.
// Sobrescreva processar() em cada classe com uma mensagem diferente.
// Coloque as formas de pagamento em um array e execute o método de cada uma.
//
// Escreva sua solução abaixo:

class Pagamento {
  processar() {
    return "Processando pagamento...";
  }
}

class Pix extends Pagamento {

  processar() {
    return "Pagamento via pix: QR Code gerado. aguardando assinatura digital...";
  }
}

class Cartao extends Pagamento {

  processar() {
    return "Pagamento via cartão: conectando com a operadora... transação autorizada!";
  }
}


const listaPagamentos = [
  new Pix(),
  new Cartao(),
  new Pagamento() 
];

listaPagamentos.forEach((pagamento, index) => {
  console.log(`[Forma ${index + 1}]: ${pagamento.processar()}`);
});