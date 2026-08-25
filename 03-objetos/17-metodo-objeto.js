// EXERCÍCIO 17 - MÉTODO DE OBJETO
// Crie um objeto circulo com a propriedade raio e um método calcularArea().
// O método deve retornar Math.PI * raio * raio.
// Mostre a área com duas casas decimais.
//
// Escreva sua solução abaixo:

const circulo = {
  raio: 5,
  calcularArea() {
    return Math.PI * this.raio * this.raio;
  }
};

const areaFormatada = circulo.calcularArea().toFixed(2);

console.log(`A área do círculo com raio ${circulo.raio} é: ${areaFormatada}`);