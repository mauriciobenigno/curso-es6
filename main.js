// SPREAD
/** Consiste na passagem de informação de uma estrutura para outra */
// Exemplo 1  - usando spread para concatenar os arrays
const arr1 = [1,2,3];
const arr2 = [4,5,6];

const arr3 = [...arr1, ...arr2];
//console.log(arr3);

// Exemplo 2 - Consiste em copiar todas as informações de um objeto sobrepondo uma delas

const usuario1 = {
    nome:'Mauricio',
    idade:24,
    empresa:'BenignoDev',
};

const usuario2 = { ...usuario1, nome:'Jose'}; // copia todo o conteúdo mas troca o nome

console.log(usuario2);
