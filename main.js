//import { sub } from './funcoes'; // Ao importar arquivos, a função deve manter o mesmo nome
//import somaFun from './soma' // Ao importar arquivos com função default, pode se nomear da forma que quiser
//para renomear uma função sem que ela seja default, deve se colocar 'NomeAnterior as NovoNome' no lugar do nome
//para importar todas as funções. pode se usar o seguinte import abaixo
import * as funcoes from './funcoes';

console.log(funcoes.soma(1,2));
//console.log(soma(1,2));
//console.log(somaFun(1,2));