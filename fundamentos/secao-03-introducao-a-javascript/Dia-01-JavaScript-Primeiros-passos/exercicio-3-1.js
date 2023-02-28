let a = 6;
let b = 3;
let adicao = a + b;
let subtracao = a - b;
let multiplicacao = a * b;
let divisao = a / b;
let modulo = a % b;

console.log(adicao);
console.log(subtracao);
console.log(multiplicacao);
console.log(divisao);
console.log(modulo);

let num1 = 10
let num2 = 5
let num3 = 20

if (num1>num2) {
    console.log(num1 + ' é o maior número. ');
} 
else if (num2 > num1) {
    console.log(num2 +  'é o maior número. ');
  } 
else {
    console.log('Os dois números são iguais.');
  }
  
  
  if (num1 > num2 && num1 > num3) {
    console.log(num1 + ' é o maior número.');
  } else if (num2 > num1 && num2 > num3) {
    console.log(num2 + ' é o maior número.');
  } else if (num3 > num1 && num3 > num2) {
    console.log(num3 + ' é o maior número.');
  } else {
    console.log('Há dois ou mais números iguais, não há um número maior.');
  }

  let numero = -5
  let tipodenumero = ''

  if (numero>0) {
    tipodenumero = 'Positive';
  }
  if (numero<0) {
    tipodenumero = 'Negative';
  }
  if (numero=0) {
    tipodenumero = 'Zero';
  }

  console.log(tipodenumero);

  let ang1 = 30
  let ang2 = 90
  let ang3 = 60

  if (ang1+ang2+ang3===180) {
    console.log (true);
  }
  else if (ang1+ang2+ang3<180) {
    console.log(false)
  }
  else if (ang1+ang2+ang3>180) {
    console.log(false)
  }
  else if (ang1 <=0 || ang2 <= 0 || ang3 <=0) {
    console.log ('os valores dos ângulos precisam ser maior que zero')
  }
  else {
    console.log('Insira um valor numérico válido')
  }

  let pecaXadrez = 'Rainha';

  switch (pecaXadrez.toLowerCase()) {
    case 'bispo':
      console.log('Movimento: na diagonal, para frente ou para trás');
      break;
    case 'cavalo':
      console.log('Movimento: em forma de L, duas casas para frente ou para trás e uma para a esquerda ou direita');
      break;
    case 'peão':
      console.log('Movimento: para frente, uma ou duas casas no primeiro movimento, depois uma casa para frente');
      break;
    case 'rainha':
        console.log('Movimento: para frente, para trás, para a esquerda, para a direita e na diagonal');
        break;
    case 'rei':
            console.log('Movimento: uma casa em qualquer direção');
        break;
    case 'torre':
      console.log('Movimento: para frente, para trás, para a esquerda e para a direita');
      break;
    default:
      console.log('Erro: esta é uma peça inválida.');
      break;
  }

  let nota = 88;

if (nota < 0 || nota > 100) {
  console.log('Erro: insira uma nota entre 0 e 100.');
} else if (nota >= 90) {
    console.log('A');
  } else if (nota >= 80) {
    console.log('B');
  } else if (nota >= 70) {
    console.log('C');
  } else if (nota >= 60) {
    console.log('D');
  } else if (nota >= 50) {
    console.log('E');
  } else {
    console.log('F');
  }

  let var1 = 2
  let var2 = 3
  let var3 = 5

  if (var1 % 2 === 0 || var2 % 2 === 0 || var3 % 2 === 0) {
    console.log ('true');
  }
    else {
        console.log('false');
    }

    let var11 = 2
    let var22 = 3
    let var33 = 5
  
    if (var11 % 2 !== 0 || var22 % 2 !== 0 || var33 % 2 !== 0) {
      console.log ('true');
    } else {
          console.log('false');
      }

let custoProduto = 185
let vendaProduto = 290

if (custoProduto<0 || vendaProduto <0) {
  console.log('Os valores do custo e da venda devem ser maiores que zero')
}

let imposto = 0.2;
let valorCustoTotal = custoProduto * (1+imposto)
let lucro = vendaProduto - valorCustoTotal
let lucroTotal = 1000 * lucro
console.log('O lucro da venda de mil produtos é R$' +lucroTotal)

const salarioBruto = 12000;

let aliquotaINSS;
let aliquotaIR;
if (salarioBruto <= 1556.94) {
  aliquotaINSS = salarioBruto * 0.08;
} else if (salarioBruto <= 2594.92) {
  aliquotaINSS = salarioBruto * 0.09;
} else if (salarioBruto <= 5189.82) {
  aliquotaINSS = salarioBruto * 0.11;
} else {
  aliquotaINSS = 570.88;
}
let salarioBase = salarioBruto - aliquotaINSS;
if (salarioBase <= 1903.98) {
  aliquotaIR = 0;
}
if (salarioBase <= 2826.65) {
  aliquotaIR = (salarioBase * 0.075) - 142.80;
}
else if (salarioBase <= 3751.05) {
  aliquotaIR = (salarioBase * 0.15) - 354.80
}
else if (salarioBase <= 4664.68) {
  aliquotaIR = (salarioBase * 0.225) - 636.13;
} else {
  aliquotaIR = (salarioBase * 0.275) - 869.36;
};

const salarioLiquido = salarioBruto-aliquotaINSS-aliquotaIR
console.log('Salário líquido: R$ ' + salarioLiquido.toFixed(2));