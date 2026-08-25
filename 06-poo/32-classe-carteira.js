// EXERCÍCIO 32 - ENCAPSULAMENTO
// Crie uma classe CarteiraDigital com o campo privado #saldo.
// Crie os métodos adicionarCredito(valor), realizarPagamento(valor) e consultarSaldo().
// Não permita pagamentos maiores que o saldo disponível.
//
// Escreva sua solução abaixo:

class CarteiraDigital {
  #saldo;

  constructor(saldoInicial = 0) {
    this.#saldo = saldoInicial >= 0 ? saldoInicial : 0;
  }

  adicionarCredito(valor) {
    if (valor > 0) {
      this.#saldo += valor;
      console.log(`Crédito de R$ ${valor.toFixed(2)} adicionado com sucesso.`);
    } else {
      console.log("Erro: O valor do crédito deve ser maior que zero.");
    }
  }

  realizarPagamento(valor) {
    if (valor <= 0) {
      console.log("Erro: o valor do pagamento deve ser maior que zero");
      return;
    }

    if (valor <= this.#saldo) {
      this.#saldo -= valor;
      console.log(`Pagamento de R$ ${valor.toFixed(2)} realizado com sucesso`);
    } else {
      console.log(`Erro: saldo insuficiente para pagar R$ ${valor.toFixed(2)}`);
    }
  }

  consultarSaldo() {
    return `Saldo atual: R$ ${this.#saldo.toFixed(2)}`;
  }
}


const minhaCarteira = new CarteiraDigital(100); 
console.log(minhaCarteira.consultarSaldo());


minhaCarteira.adicionarCredito(50);
console.log(minhaCarteira.consultarSaldo()); 

minhaCarteira.realizarPagamento(40);
console.log(minhaCarteira.consultarSaldo()); 

minhaCarteira.realizarPagamento(150); 
console.log(minhaCarteira.consultarSaldo()); 