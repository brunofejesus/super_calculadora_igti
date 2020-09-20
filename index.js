var numberA = 0;
var numberB = 0;

const inputA = document.getElementById('numberA');
const inputB = document.getElementById('numberB');

inputA.addEventListener('keydown', function (event) {
  if (event.key === 'Enter') {
    event.preventDefault();
    calcula();
  }
});

inputB.addEventListener('keydown', function (event) {
  if (event.key === 'Enter') {
    event.preventDefault();
    calcula();
  }
});

function somar(a, b) {
  return formatNumber(a + b);
}

function subtrair(a, b, toggle) {
  return toggle ? formatNumber(a - b) : formatNumber(b - a);
}

function multiplicar(a, b) {
  return formatNumber(a * b);
}

function dividir(a, b, toggle) {
  if (toggle)
    return a === 0 || b === 0
      ? 'Divisão por 0'
      : formatNumber((b / a).toFixed(2));
  else
    return a === 0 || b === 0
      ? 'Divisão por 0'
      : formatNumber((a / b).toFixed(2));
}

function aoQuadrado(value) {
  return Math.pow(value, 2);
}

function divisoresNumber(value) {
  var result = '';
  var count = 0;
  for (let index = 1; index <= value; index++) {
    if (value % index == 0) {
      count++;
      result += `${index},`;
    }
  }
  result = result.slice(0, -1);
  result += ` (${count})`;
  return result;
}

function fatorial(value) {
  if (value > 0 && value <= 21) {
    var fatorial = 1;
    for (let i = 1; i <= value; i++) {
      fatorial *= i;
    }
    return fatorial;
  }
}

function calcula() {
  numberA = parseInt(document.getElementById('numberA').value);
  numberB = parseInt(document.getElementById('numberB').value);

  if (isNaN(numberA)) numberA = 0;
  if (isNaN(numberB)) numberB = 0;
  let msg = 'Digite os valores de A e B';
  let msgA = 'Digite o valor de A';
  let msgB = 'Digite o valor de B';

  document.getElementById('soma').value = msg;
  document.getElementById('subtrair').value = msg;
  document.getElementById('subtrairinv').value = msg;
  document.getElementById('multiplicar').value = msg;
  document.getElementById('quadradoB').value = msgB;
  document.getElementById('quadradoA').value = msgA;
  document.getElementById('divisorA').value = msgA;
  document.getElementById('divisorB').value = msgB;
  document.getElementById('fatorialA').value = msgA;
  document.getElementById('fatorialB').value = msgB;

  if (numberA && numberB) {
    document.getElementById('soma').value = somar(numberA, numberB);
    document.getElementById('subtrair').value = subtrair(
      numberA,
      numberB,
      true
    );
    document.getElementById('subtrairinv').value = subtrair(
      numberA,
      numberB,
      false
    );
    document.getElementById('multiplicar').value = multiplicar(
      numberA,
      numberB
    );
    document.getElementById('dividir').value = dividir(numberA, numberB, false);
    document.getElementById('dividirinv').value = dividir(
      numberA,
      numberB,
      true
    );

    document.getElementById('quadradoB').value = aoQuadrado(numberB);
    document.getElementById('quadradoA').value = aoQuadrado(numberA);

    document.getElementById('divisorA').value = divisoresNumber(numberA);
    document.getElementById('divisorB').value = divisoresNumber(numberB);
    document.getElementById('fatorialA').value = fatorial(numberA);
    document.getElementById('fatorialB').value = fatorial(numberB);
  } else {
    if (numberA) {
      document.getElementById('quadradoA').value = aoQuadrado(numberA);
      document.getElementById('divisorA').value = divisoresNumber(numberA);
      document.getElementById('fatorialA').value = fatorial(numberA);
      document.getElementById('dividir').value = dividir(
        numberA,
        numberB,
        false
      );
      document.getElementById('dividirinv').value = dividir(
        numberA,
        numberB,
        true
      );
    } else {
      document.getElementById('quadradoA').value = msgA;
      document.getElementById('divisorA').value = msgA;
      document.getElementById('fatorialA').value = msgA;
    }

    if (numberB) {
      document.getElementById('quadradoB').value = aoQuadrado(numberB);
      document.getElementById('divisorB').value = divisoresNumber(numberB);
      document.getElementById('fatorialB').value = fatorial(numberB);
      document.getElementById('dividirinv').value = dividir(
        numberA,
        numberB,
        true
      );
    } else {
      document.getElementById('quadradoB').value = msgB;
      document.getElementById('divisorB').value = msgB;
      document.getElementById('fatorialB').value = msgB;
    }
  }
}

function formatNumber(number) {
  return new Intl.NumberFormat('pt-BR').format(number);
}
