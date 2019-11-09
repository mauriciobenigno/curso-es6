// REST
/* Serve para pegar o resto dos dados*/
// para usar o resto basta colocar ...VARIAVEL
// Exemplo 1
const usuario = {
    nome: 'Mauricio',
    idade: 24,
    empresa: 'BenignoDev'
};

const {nome, ...resto} = usuario;

//console.log(nome);
//console.log(resto);

// Exemplo 2
const arr = [1,2,3,4];
const [a, b, ...c] = arr;

/*console.log(a);
console.log(b);
console.log(c);*/

// Exemplo 3

function soma(...parametros)
{
    return parametros.reduce((total, next) => total + next);
}

console.log(soma(1,2,2,4));