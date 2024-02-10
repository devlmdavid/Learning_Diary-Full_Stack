// Exercício 1

// let num1 =5;
// let num2 =5;
// let num3 =6;

// console.log(num1 + num2)
// console.log(num1 - num2)
// console.log(num1 * num2)
// console.log(num1 / num2)
// console.log(num1 % num2)


// Exercício 2

// if (num1 > num2) {
//     console.log('Sim, num1 é maior!')
// } else {
//     console.log('Num2 é maior!');
// }

// Exercício 3

// if (num1 > num2 && num1 > num3) {
//     console.log('Num1 é maior!')
// } else if (num2 > num1 && num2 > num3) {
//     console.log('Num2 é maior!');
// } else if (num3 > num1 && num3 > num2) {
//     console.log('Num3 é maior!');
// }


// Exercício 4

// let anguloA = 70;
// let anguloB = 20;
// let anguloC = 90;

// let somaABC = anguloA + anguloB + anguloC;

// let todosAngulos = anguloA > 0 && anguloB > 0 && anguloC > 0;

// if (todosAngulos){
//     if (somaABC === 180) {
//         console.log(true);
//     } else {
//         console.log(false);
//     };    
// } else {
//     console.log('Erro: ângulo inválido')
// }


// Exercício 5

// let xadrez = "Peão";

// switch (xadrez) {
//     case 'Bispo':
//         console.log('Pode andar na diagonal!')
//         break;
//     case 'Torre':
//         console.log('Pode andar reto!')
//         break;
//     case 'Cavalo':
//         console.log('Pode andar em L!')
//         break;
//     default: 
//         console.log('Não é uma peça de xadrez')
//         break;
// }


// Exercício 6

// let num1 = 4;
// let num2 = 5;
// let num3 = 3;

// if (num1 % 2 == 0 || num2 % 2 == 0 || num3 % 2 == 0) {
//     console.log(true);
// } else {
//     console.log(false)
// }


// Exercício 7

let salario = 3000
let inss;
let ir;

if (salario <= 1556.94) {
    inss = salario * 0.08;
} else if (salario > 1556.95 && salario <=2594.92) {
    inss = salario * 0.09;
} else if (salario > 2594.92 && salario <= 5189.82) {
    inss = salario * 0.11;
} else {
    console.log(inss = 570.88);
}
console.log(inss)

salario = salario - inss;

if (salario <= 1903.98) {
    ir = 0;
} else if (salario >= 1903.99 && salario <= 2826.65) {
    ir = salario * 0.075 - 142,80;
} else if (salario >= 2826.66 && salario <= 3751.05) {
    ir = salario * 0.15 - 354.8;
} else if (salario >= 3751.06 && salario <=4664.68){
    ir = salario * 0.225 - 636.13;
} else {
    ir =salario * 0.275 - 869.36;
}
console.log(ir)

salario = salario - ir;

console.log(salario);