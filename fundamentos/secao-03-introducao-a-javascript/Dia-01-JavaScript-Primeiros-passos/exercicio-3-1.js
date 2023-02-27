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
    console.log(num2 + " é o maior número. ");
  } 
else {
    console.log("Os dois números são iguais.");
  }
  
  
  if (num1 > num2 && num1 > num3) {
    console.log(num1 + " é o maior número.");
  } else if (num2 > num1 && num2 > num3) {
    console.log(num2 + " é o maior número.");
  } else if (num3 > num1 && num3 > num2) {
    console.log(num3 + " é o maior número.");
  } else {
    console.log("Há dois ou mais números iguais, não há um número maior.");
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