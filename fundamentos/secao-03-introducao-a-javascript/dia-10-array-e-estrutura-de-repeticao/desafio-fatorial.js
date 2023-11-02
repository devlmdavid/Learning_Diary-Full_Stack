// Desafio fatorial
let factorial = 1;
for (let index = 10; index > 0; index -= 1) {
  factorial *= index;
};

console.log(factorial);


const fatorial = (num) => {
    if (num ===0 || num ===1) {
        return 1;
    }
    for (let index = num -1; index >= 1; index -= 1) {
        num *= index;
    }
    console.log(num)
    return num;
};

fatorial(10);