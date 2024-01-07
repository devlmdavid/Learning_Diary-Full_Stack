// Desafio dos asteriscos
// Quadrado de asteriscos
let ni = 5;
let symbolo = '*';
let inputiLine = '';

for (let lineIndex = 0; lineIndex < ni; lineIndex += 1) {
  inputiLine = inputiLine + symbolo;
};

for (let lineIndex = 0; lineIndex < ni; lineIndex += 1) {
  console.log(inputiLine);
};

// Pirâmide de asteriscos
let tamanho = 5;
let simbolo = '*';
let espaço = '';

for (let index = 0; index <= tamanho; index += 1) {
    espaço = espaço + simbolo;
    console.log(espaço);
};

// Pirâmide invertida
let n = 5;
let symbol = '*';
let inputLine = '';
let inputPosition = n - 1;

for (let lineIndex = 0; lineIndex < n; lineIndex += 1) {
  for (let columnIndex = 0; columnIndex < n; columnIndex += 1) {
    if (columnIndex < inputPosition) {
      inputLine = inputLine + ' ';
    } else {
      inputLine = inputLine + symbol;
    }
  }
  console.log(inputLine);
  inputLine = '';
  inputPosition -= 1;
};