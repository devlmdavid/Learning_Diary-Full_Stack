// // Exercício 01

// const balance = 100;

// function sumBalance(value) {
//   return balance + value;
// }

// function subBalance(value) {
//   return balance - value;
// }

// function multBalance(value) {
//   return balance * value;
// }

// function divBalance(value) {
//   return balance / value;
// }

// console.log(sumBalance(5))
// console.log(subBalance(5))
// console.log(multBalance(5))
// console.log(divBalance(5))


// Exercício 02

const trybeBankCustomers = ['Oliva', 'Nat', 'Gus'];

const addCustomer = (custommerAdd, newCustomers) => {
    for (let index = 0; index < trybeBankCustomers.length; index += 1) {
        if (typeof newCustomers === 'string') {
            trybeBankCustomers.push(newCustomers)
          
        } else {
          return 'Todos os valores precisam ser strings.';
        }
      }
  if (typeof custommerAdd != 'string') {
      return `O parâmetro deve ser do tipo string`
    }
      return `Pessoa adcionada com sucesso!`
}
console.log(addCustomer(0));
console.log(addCustomer("Joaquim"));
console.log(trybeBankCustomers);