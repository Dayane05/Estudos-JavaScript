// O laço for é utilizado para executar um bloco de código várias vezes, de acordo com uma condição específica.

const numeros = [1, 2, 3, 4, 5];

for(let i = 0; i < numeros.length; i++) {
  console.log(numeros[i]);
}

// O laço while é utilizado quando não sabemos quantas vezes precisamos executar uma ação.

let jogadas = 0;
let cara = false;

while(!cara) {
  jogadas++;
  cara = Math.random() < 0.5;
}

console.log(`A moeda caiu cara após ${jogadas} jogadas!`);

// O laço do-while é um tipo de laço while que sempre executa pelo menos uma vez o bloco de código dentro do loop.
// do = faça. while = enquanto...

let numero;

do {
  numero = prompt('Digite um número entre 1 e 10:');
} while(numero < 1 || numero > 10);

console.log(`Você digitou o número ${numero}.`);

// Mais exemplos

for (let contador = 1; contador <= 5; contador++) {
    console.log(contador);
  }

  

let dado = 0;

while (dado <= 4) {
  dado = Math.floor(Math.random() * 6) + 1;
  console.log("Você tirou um", dado);
}

let bolinhosComidos = 0;

do {
  bolinhosComidos++;
  console.log("Você comeu", bolinhosComidos, "bolinhos!");
} while (bolinhosComidos < 5);
  