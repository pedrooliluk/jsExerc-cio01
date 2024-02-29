/* 
  Solicite 2 números
  e apresente o resultado final ao usuário
*/

let numberOne = Number(prompt("Digite o primeiro numero:"));
let numberTwo = Number(prompt("Digite o segundo numero:"));

let sum = numberOne + numberTwo;
let division = (numberOne / numberTwo).toFixed(2);
let subtraction = numberOne - numberTwo ;
let multiplication = numberOne * numberTwo;
let remainder = numberOne % numberTwo ;

let cParImpar = ( (sum % 2) === 0 ) ? 'Par' : 'Impar'
let theSame = ( numberOne === numberTwo ) ? 'Sim' : 'Não'

alert(`
    Resultado soma: ${sum} \n 
    Resultado subtração: ${subtraction} \n 
    Resultado divisão: ${division} \n 
    Resultado multiplicação: ${multiplication} \n 
    Resultado resto: ${remainder} \n 
    Resultado Par ou impar: ${cParImpar} \n 
    Resultado digitos iguais: ${theSame} \n 
    `);


/*
alert('Resultado : ' + resultado);

let nrandow = Math.round( Math.random()* 10 )

alert(nrandow) ;
*/